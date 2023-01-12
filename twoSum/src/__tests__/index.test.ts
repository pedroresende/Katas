import twoSum from './../index'

describe('twoSum', () => {
  it('should return the sum of 4', () => {
    expect(twoSum([1, 2, 3], 4)).toEqual([0, 2])
  })

  it('should return the sum of 14690', () => {
    expect(twoSum([1234, 5678, 9012], 14690)).toEqual([1, 2])
  })

  it('should return the sum of 4', () => {
    expect(twoSum([2, 2, 3], 4)).toEqual([0, 1])
  })

  it('should return the sum of 4', () => {
    expect(twoSum([2, 3, 1], 4)).toEqual([1, 2])
  })
})
