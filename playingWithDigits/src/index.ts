export class PlayingWithDigits {
  public static digPow = (n: number, p: number) => {
    const digits = String(n).split('')
    const divideBy = Number(digits.join(''))

    const total = digits.reduce((acc, curr, index) => 
      acc + Number(Number(curr) ** (p + index))
    , 0)

    const result = total / divideBy
    const rest = total % divideBy

    return result >= 1 && rest === 0 ? result : -1
  }
}
