import {
  generateEstoniaCode,
  generateLatviaCode,
  generateLithuaniaCode,
} from '../src/codeGenerator'

test('shouldReturnCorrectCountryPrefix', () => {
  const actualResult: string = generateEstoniaCode()

  expect(actualResult.startsWith('EST-')).toBe(true)
})

test('shouldReturnCorrectCountryPrefix', () => {
  const actualResult: string = generateLatviaCode()

  expect(actualResult.startsWith('LVA-')).toBe(true)
})

test('shouldReturnCorrectCountryPrefix', () => {
  const actualResult: string = generateLithuaniaCode()

  expect(actualResult.startsWith('LTU-')).toBe(true)
})

test('shouldReturnCorrectCountryCodeLength', () => {
  const actualResult: string = generateLithuaniaCode()

  expect(actualResult.length == 8).toBe(true)
})

test('shouldReturnCorrectCountryCodeFormat', () => {
  const actualResult: string = generateLatviaCode()

  expect(/LVA-\d{4}/.test(actualResult)).toBe(true)
})
