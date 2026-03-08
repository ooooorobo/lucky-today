import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  score: number
}

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-score-high'
  if (score >= 80) return 'text-score-mid'
  return 'text-score-low'
}

function getScoreLabel(score: number): string {
  if (score >= 90) return '대길 ✨'
  if (score >= 80) return '길 🌟'
  return '소길 🍀'
}

export default function ScoreDisplay({ score }: Props) {
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    const duration = 800
    const steps = 40
    const increment = score / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= score) {
        setDisplayed(score)
        clearInterval(timer)
      } else {
        setDisplayed(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [score])

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-xs text-gray-400 uppercase tracking-widest">오늘의 행운 점수</p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-7xl font-bold tabular-nums ${getScoreColor(score)}`}
      >
        {displayed}
      </motion.div>
      <p className="text-sm text-gray-500">{getScoreLabel(score)}</p>
    </div>
  )
}
