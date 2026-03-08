// src/pages/FortunePage.tsx
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { isValidUuid, getTodayFortune } from '../lib/fortune'
import type { Fortune } from '../data/fortunes'
import LoadingScreen from '../components/LoadingScreen'
import FortuneCard from '../components/FortuneCard'

export default function FortunePage() {
  const { uuid } = useParams<{ uuid: string }>()
  const navigate = useNavigate()
  const [fortune, setFortune] = useState<Fortune | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!uuid || !isValidUuid(uuid)) {
      navigate('/invalid', { replace: true })
      return
    }

    // 로딩 애니메이션을 위한 최소 대기
    const timer = setTimeout(() => {
      setFortune(getTodayFortune(uuid))
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [uuid, navigate])

  return (
    <div className="min-h-dvh flex items-center justify-center px-4 py-12">
      {loading ? (
        <LoadingScreen />
      ) : fortune ? (
        <FortuneCard fortune={fortune} />
      ) : null}
    </div>
  )
}
