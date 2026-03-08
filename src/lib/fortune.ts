import { fortunes, type Fortune } from '../data/fortunes'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export function isValidUuid(id: string): boolean {
  return UUID_REGEX.test(id)
}

function simpleHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // 32bit 정수로 유지
  }
  return Math.abs(hash)
}

function getTodayString(): string {
  const d = new Date()
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
}

export function getTodayFortune(uuid: string): Fortune {
  const seed = uuid + getTodayString()
  const hash = simpleHash(seed)
  return fortunes[hash % fortunes.length]
}
