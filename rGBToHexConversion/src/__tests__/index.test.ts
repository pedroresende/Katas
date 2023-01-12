import { rgb } from './../index'

describe('twoSum', () => {
  it('should return 1', () => {
    expect(rgb(0, 0, 0)).toEqual('000000')
  })

  it('should return -1', () => {
    expect(rgb(0, 0, -20)).toEqual('000000')
  })

  it('should return 9', () => {
    expect(rgb(300, 255, 255)).toEqual('FFFFFF')
  })

  it('should return -1', () => {
    expect(rgb(173, 255, 47)).toEqual('ADFF2F')
  })
})
