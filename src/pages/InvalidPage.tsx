// src/pages/InvalidPage.tsx
import { motion } from 'framer-motion'

export default function InvalidPage() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4 px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-6xl"
      >
        🍂
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-xl font-bold text-gray-700">올바르지 않은 부적이에요</h1>
      </motion.div>
    </div>
  )
}
