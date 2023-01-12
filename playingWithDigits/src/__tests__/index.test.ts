import { PlayingWithDigits } from './../index'

describe('twoSum', () => {
  it('should return 1', () => {
    expect(PlayingWithDigits.digPow(89, 1)).toEqual(1)
  })

  it('should return -1', () => {
    expect(PlayingWithDigits.digPow(92, 1)).toEqual(-1)
  })

  it('should return 9', () => {
    expect(PlayingWithDigits.digPow(114, 3)).toEqual(9)
  })

  it('should return -1', () => {
    expect(PlayingWithDigits.digPow(46288, 5)).toEqual(-1)
  })
})
