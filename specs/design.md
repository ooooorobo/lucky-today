# Lucky Today — 설계 문서

> NFC 뜨개 부적을 태그하면 오늘의 운세를 보여주는 웹앱

---

## 1. 기획

### 서비스 개요
- **서비스명**: Lucky Today

### UX 플로우
```
NFC 태그
  → /:uuid 페이지 로드
  → 로딩 애니메이션 (부적을 여는 느낌)
  → 운세 카드 등장
      ├── 행운 점수 (70~100점)
      ├── 오늘의 조언
      └── 행운 아이템
```

### 운세 규칙
- 점수 범위: 70~100점만 노출 (나쁜 운세 없음)
- 같은 날 + 같은 UUID = 항상 같은 운세 (deterministic)
- 날짜가 바뀌면 새로운 운세

---

## 2. 아키텍처

### 핵심 원칙
- **서버 없음** — 순수 정적 클라이언트 앱
- **결정론적 운세 선택** — `hash(uuid + YYYYMMDD) % pool.length`
- **배포**: Vercel (무료 정적 호스팅)

### 프로젝트 구조
```
lucky-today/
├── public/
├── src/
│   ├── data/
│   │   └── fortunes.ts       # 운세 풀 하드코딩
│   ├── lib/
│   │   └── fortune.ts        # 해시 기반 운세 선택 순수 함수
│   ├── pages/
│   │   └── FortunePage.tsx   # /:uuid 라우트
│   ├── components/
│   │   ├── FortuneCard.tsx   # 운세 카드 UI
│   │   ├── ScoreDisplay.tsx  # 점수 카운트업 표시
│   │   └── LoadingScreen.tsx # 로딩 애니메이션
│   ├── App.tsx
│   └── main.tsx
├── specs/
│   └── design.md
└── vite.config.ts
```

### 기술 스택
| 역할 | 선택 | 이유 |
|------|------|------|
| 번들러 | Vite | 요청사항 |
| UI | React + TypeScript | 요청사항 |
| 라우팅 | React Router v7 | `/:uuid` 처리 |
| 스타일 | Tailwind CSS v4 | 빠른 키치 스타일링 + CSS 변수 테마 |
| 애니메이션 | Framer Motion | 카드 등장 연출 |
| 배포 | Vercel | 무료 정적 호스팅 |

---

## 3. 세부 기술 설계

### 운세 데이터 포맷
```ts
type Fortune = {
  score: number;      // 70~100
  advice: string;     // 오늘의 조언 한 줄
  luckyItem: string;  // 행운 아이템
  emoji: string;      // 카드 분위기용 이모지
}
```
- 운세 풀: `src/data/fortunes.ts`에 배열로 하드코딩
- 모든 항목 70점 이상

### 운세 선택 로직
```ts
// src/lib/fortune.ts
function getTodayFortune(uuid: string): Fortune {
  const d = new Date()
  const today = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`
  const seed = uuid + today
  const hash = simpleHash(seed) // 순수 문자열 해시 (djb2)
  return fortunes[hash % fortunes.length]
}
```
- 로컬 날짜 기준 (UTC 아님) → KST 사용자 정확히 동작

### 디자인 토큰 (Tailwind CSS v4 `@theme`)
```css
@theme {
  --color-clover: #4CAF7D;
  --color-gold: #FFD700;
  --color-bg-from: #F0FFF4;
  --color-bg-to: #FFFDE7;
  --color-score-low: #93C5FD;   /* 70~79 */
  --color-score-mid: #86EFAC;   /* 80~89 */
  --color-score-high: #FDE047;  /* 90~100 */
  --color-card-bg: #FFFFFF;
  --font-display: 'Gmarket Sans', 'Apple SD Gothic Neo', sans-serif;
}
```

### 애니메이션 흐름
| 단계 | 내용 | 시간 |
|------|------|------|
| 1. 로딩 | 네잎클로버 스핀 + "부적을 여는 중..." | 1.5s 대기 |
| 2. 카드 등장 | 아래에서 슬라이드업 + 페이드인 | 0.5s |
| 3. 점수 카운트업 | 0 → 실제 점수 | 0.8s |
| 4. 조언 / 아이템 | stagger 순차 등장 | delay 0.6s / 0.8s |

### 엣지케이스
- **UUID 형식이 아닌 경우**: UUID 정규식 검증 실패 시 InvalidPage로 리다이렉트
- **UUID가 유효한 형식이면**: 어떤 값이든 해시 → 운세 선택 (화이트리스트 없음)

### NFC URL 포맷
```
https://lucky-today.vercel.app/<uuid>
```
UUID 생성:
```bash
node -e "const {randomUUID}=require('crypto'); for(let i=0;i<10;i++) console.log(randomUUID())"
```
