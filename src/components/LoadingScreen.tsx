import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh gap-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="text-6xl select-none"
      >
        🍀
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-clover font-medium text-lg tracking-wide"
      >
        부적을 여는 중...
      </motion.p>
    </div>
  )
}
