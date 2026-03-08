// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { isValidUuid, getTodayFortune } from './fortune'
import { fortunes } from '../data/fortunes'

describe('isValidUuid', () => {
  it('유효한 UUID 형식을 통과시킨다', () => {
    expect(isValidUuid('a3f9c2d1-4b8e-4c3a-9f2e-1d5b7e8f3a2c')).toBe(true)
  })

  it('잘못된 형식을 거부한다', () => {
    expect(isValidUuid('not-a-uuid')).toBe(false)
    expect(isValidUuid('1234')).toBe(false)
    expect(isValidUuid('')).toBe(false)
  })
})

describe('getTodayFortune', () => {
  it('운세 풀에 있는 항목을 반환한다', () => {
    const uuid = 'a3f9c2d1-4b8e-4c3a-9f2e-1d5b7e8f3a2c'
    const fortune = getTodayFortune(uuid)
    expect(fortunes).toContain(fortune)
  })

  it('같은 uuid + 같은 날에는 항상 같은 운세를 반환한다', () => {
    const uuid = 'b1c2d3e4-f5a6-7890-abcd-ef1234567890'
    const f1 = getTodayFortune(uuid)
    const f2 = getTodayFortune(uuid)
    expect(f1).toEqual(f2)
  })

  it('반환된 운세의 점수는 70 이상 100 이하이다', () => {
    const uuid = 'c3d4e5f6-a7b8-4c3a-9f2e-1d5b7e8f3a2c'
    const fortune = getTodayFortune(uuid)
    expect(fortune.score).toBeGreaterThanOrEqual(70)
    expect(fortune.score).toBeLessThanOrEqual(100)
  })

  it('모든 운세 데이터의 점수가 70 이상이다', () => {
    fortunes.forEach(f => {
      expect(f.score).toBeGreaterThanOrEqual(70)
    })
  })
})
