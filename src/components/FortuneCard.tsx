import { motion } from 'framer-motion'
import type { Fortune } from '../data/fortunes'
import ScoreDisplay from './ScoreDisplay'

type Props = {
  fortune: Fortune
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function FortuneCard({ fortune }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto"
    >
      {/* 헤더 */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="text-center mb-2"
      >
        <span className="text-4xl">{fortune.emoji}</span>
        <h1 className="text-sm text-gray-400 tracking-widest uppercase mt-1">Lucky Today</h1>
      </motion.div>

      {/* 카드 본체 */}
      <div
        className="bg-card-bg rounded-3xl p-8 flex flex-col gap-6"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
      >
        {/* 점수 */}
        <ScoreDisplay score={fortune.score} />

        <hr className="border-gray-100" />

        {/* 오늘의 조언 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-1"
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest">오늘의 조언</p>
          <p className="text-base text-gray-700 leading-relaxed font-medium">
            {fortune.advice}
          </p>
        </motion.div>

        {/* 행운 아이템 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex items-center gap-3 bg-bg-from rounded-2xl px-4 py-3"
        >
          <span className="text-clover text-lg">🍀</span>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">행운 아이템</p>
            <p className="text-sm font-semibold text-gray-700">{fortune.luckyItem}</p>
          </div>
        </motion.div>
      </div>

      {/* 푸터 */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.0 }}
        className="text-center text-xs text-gray-300 mt-4"
      >
        내일 또 태그해봐요 ✨
      </motion.p>
    </motion.div>
  )
}
