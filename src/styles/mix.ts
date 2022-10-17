/**
 * @see https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
 */
export const percentToHex = (percentage: number) => {
  const intValue = Math.round((percentage / 100) * 255)
  const hexValue = intValue.toString(16)
  return hexValue.padStart(2, '0').toUpperCase()
}
