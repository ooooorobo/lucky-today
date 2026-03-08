export type Fortune = {
  score: number;      // 70~100
  advice: string;     // 오늘의 조언
  luckyItem: string;  // 행운 아이템
  emoji: string;      // 분위기 이모지
}

export const fortunes: Fortune[] = [
  { score: 95, advice: "오늘은 망설이지 말고 먼저 말을 걸어봐요.", luckyItem: "네잎클로버 스티커", emoji: "🍀" },
  { score: 88, advice: "작은 것에 감사하면 큰 행운이 따라와요.", luckyItem: "노란 머리핀", emoji: "🌟" },
  { score: 72, advice: "오늘은 평소보다 조금 일찍 일어나면 좋아요.", luckyItem: "민트 향 립밤", emoji: "🌿" },
  { score: 91, advice: "좋아하는 사람에게 연락해봐요. 타이밍이 좋아요.", luckyItem: "분홍 손편지", emoji: "💌" },
  { score: 85, advice: "오늘 점심은 평소와 다른 메뉴에 도전해봐요.", luckyItem: "새 볼펜", emoji: "✏️" },
  { score: 78, advice: "산책 10분이 오늘의 컨디션을 바꿔줄 거예요.", luckyItem: "흰 운동화", emoji: "👟" },
  { score: 93, advice: "머릿속에 맴도는 아이디어를 지금 바로 메모해요.", luckyItem: "형광 포스트잇", emoji: "📝" },
  { score: 70, advice: "오늘은 억지로 애쓰지 않아도 괜찮아요.", luckyItem: "따뜻한 캐모마일 티", emoji: "🍵" },
  { score: 96, advice: "행운은 지금 이 순간 옆에 있어요. 느껴봐요.", luckyItem: "골드 액세서리", emoji: "✨" },
  { score: 82, advice: "오늘은 유독 눈에 잘 띄는 날이에요.", luckyItem: "빨간 립스틱", emoji: "💄" },
  { score: 87, advice: "직감을 믿어봐요. 오늘의 직감은 정확해요.", luckyItem: "수정 팔찌", emoji: "🔮" },
  { score: 74, advice: "좋아하는 음악을 틀고 하루를 시작해봐요.", luckyItem: "무선 이어폰", emoji: "🎵" },
  { score: 100, advice: "오늘은 뭘 해도 다 잘 풀리는 날이에요!", luckyItem: "네잎클로버 부적", emoji: "🍀" },
  { score: 89, advice: "새로운 취미를 시작하기에 딱 좋은 날이에요.", luckyItem: "스케치북", emoji: "🎨" },
  { score: 76, advice: "오늘 마신 커피는 유독 맛있게 느껴질 거예요.", luckyItem: "귀여운 텀블러", emoji: "☕" },
  { score: 92, advice: "오늘 만나는 사람이 중요한 인연이 될 수도 있어요.", luckyItem: "명함 지갑", emoji: "🤝" },
  { score: 84, advice: "계획을 세우면 그대로 이루어지는 날이에요.", luckyItem: "다이어리", emoji: "📅" },
  { score: 71, advice: "혼자만의 시간이 오늘의 에너지를 충전해줄 거예요.", luckyItem: "향초", emoji: "🕯️" },
  { score: 98, advice: "오늘 도전하는 일은 반드시 좋은 결과가 있어요.", luckyItem: "황금 네잎클로버", emoji: "🏆" },
  { score: 80, advice: "친구의 한마디가 오늘 힘이 되어줄 거예요.", luckyItem: "귀여운 스티커", emoji: "💛" },
  { score: 94, advice: "오늘은 하고 싶었던 말을 솔직하게 해봐요.", luckyItem: "일기장", emoji: "📖" },
  { score: 73, advice: "느리게 가도 괜찮아요. 방향이 맞으면 됩니다.", luckyItem: "편한 슬리퍼", emoji: "🌙" },
  { score: 86, advice: "오늘의 작은 노력이 나중에 큰 결실로 돌아와요.", luckyItem: "작은 화분", emoji: "🌱" },
  { score: 90, advice: "웃는 얼굴이 오늘의 가장 강력한 무기예요.", luckyItem: "귀여운 거울", emoji: "😊" },
  { score: 77, advice: "평소보다 물을 한 잔 더 마셔봐요.", luckyItem: "귀여운 물병", emoji: "💧" },
  { score: 97, advice: "오늘은 행운의 기운이 최고조에 달해 있어요.", luckyItem: "반짝이는 헤어핀", emoji: "⭐" },
  { score: 83, advice: "정리정돈을 하면 기분도 운도 함께 올라가요.", luckyItem: "미니 오거나이저", emoji: "🗂️" },
  { score: 75, advice: "오늘은 무리하지 말고 충분히 쉬어도 괜찮아요.", luckyItem: "수면 마스크", emoji: "😴" },
  { score: 99, advice: "꿈꾸던 일을 오늘 시작해봐요. 때가 됐어요.", luckyItem: "첫 페이지를 펼친 노트", emoji: "🌈" },
  { score: 81, advice: "좋아하는 간식이 오늘의 기분을 올려줄 거예요.", luckyItem: "초콜릿", emoji: "🍫" },
  { score: 88, advice: "오늘 찍은 사진은 나중에 소중한 추억이 될 거예요.", luckyItem: "필름 카메라", emoji: "📷" },
  { score: 79, advice: "남의 시선보다 내 마음의 소리를 따라가봐요.", luckyItem: "무드 등", emoji: "🌠" },
  { score: 95, advice: "오늘은 긍정적인 에너지가 주변에 넘쳐흘러요.", luckyItem: "밝은 색 가방", emoji: "👜" },
  { score: 85, advice: "작은 선물 하나가 오늘 누군가를 기쁘게 해줄 거예요.", luckyItem: "귀여운 쿠키", emoji: "🍪" },
  { score: 91, advice: "오늘 결정한 것은 후회 없는 선택이 될 거예요.", luckyItem: "동전 지갑", emoji: "🪙" },
]
