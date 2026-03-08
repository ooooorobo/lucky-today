# Lucky Today

NFC 뜨개 부적을 태그하면 오늘의 운세를 보여주는 웹앱.

## NFC UUID 생성

부적마다 고유 UUID를 생성해서 NFC 칩에 저장합니다.

```bash
node -e "const {randomUUID}=require('crypto'); for(let i=0;i<10;i++) console.log(randomUUID())"
```

NFC 칩에 저장할 URL 형식:

```
https://lucky-today.vercel.app/<uuid>
```

## 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 테스트

```bash
npm test
```
