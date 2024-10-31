export function compareText(input: string, codeblock: string): number {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] == codeblock[i]) {
      count++
    } else {
      break
    }

  }

  return count
}

export function updateTextColorRight(textToWrite: string, userInput: string): string {
  let highLightedText = ""

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == textToWrite[i]) {
      if (userInput[i] == " ") {
        highLightedText += "_"
      } else {
        highLightedText += userInput[i]
      }
    } else {
      break
    }
  }
  return highLightedText
}

export function updateTextColorWrong(textToWrite: string, userInput: string): string {
  let highLightedText = ""

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == textToWrite[i] && highLightedText == "") {
      continue
    } else {
      if (textToWrite[i] == " ") {
        highLightedText += "_"
      } else if (i < textToWrite.length) {
        highLightedText += textToWrite[i]
      }
    }
  }
  return highLightedText
}

export function removeLetters(pieceofcode: string, userInput: string) {
  let newPieceOfCode = pieceofcode

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == pieceofcode[i]) {
      newPieceOfCode = newPieceOfCode.slice(1)
    } else {
      newPieceOfCode = newPieceOfCode.slice(1)
    }
  }
  return newPieceOfCode
}

export function checkForWin(pieceofcode: string, count: number): boolean {
  if (count == pieceofcode.length) {
    return true
  }
  return false
}

