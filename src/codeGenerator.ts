function generateRandomFourDigitNumber(): string {
  return (Math.floor(Math.random() * 9000) + 1000).toString()
}

export function generateEstoniaCode(): string {
  return `EST-${generateRandomFourDigitNumber()}`
}

export function generateLatviaCode(): string {
  return `LVA-${generateRandomFourDigitNumber()}`
}

export function generateLithuaniaCode(): string {
  return `LTU-${generateRandomFourDigitNumber()}`
}
