const convertToHex = (number: number): string => {
  let newValue = number.toString(16).toUpperCase()
  if (number > 255) {
    newValue = 'FF'
  }

  if (number <= 0) {
    newValue = '00'
  }

  if (newValue.length < 2) {
    newValue = `0${newValue}`
  }

  return newValue
}

export const rgb = (r: number, g: number, b: number): string => `${convertToHex(r)}${convertToHex(g)}${convertToHex(b)}`