// Import the sentances to write, from the sentances.json file
import sentencesData from '$lib/assets/sentances.json';

export function compareText(input: string, codeblock: string): number {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase == codeblock[i].toLowerCase) {
      count++
    } else {
      break
    }

  }

  return count
}

export function updateTextColorRight(textToWrite: string, userInput: string): string {
  let highLightedText = "";

  // Normalize both strings to lowercase for case-insensitive comparison
  const lowerTextToWrite = textToWrite.toLowerCase();
  const lowerUserInput = userInput.toLowerCase();

  for (let i = 0; i < lowerUserInput.length; i++) {
    // Compare using the lowercase versions
    if (lowerUserInput[i] === lowerTextToWrite[i]) {
      if (lowerUserInput[i] === " ") {
        highLightedText += "_"; // Use underscore for spaces
      } else {
        highLightedText += textToWrite[i]; // Preserve original case for the output
      }
    } else {
      break; // Stop on the first mismatch
    }
  }

  return highLightedText;
}

export function updateTextColorWrong(textToWrite: string, userInput: string): string {
  let highLightedText = "";

  // Normalize both strings to lowercase for case-insensitive comparison
  const lowerTextToWrite = textToWrite.toLowerCase();
  const lowerUserInput = userInput.toLowerCase();

  for (let i = 0; i < userInput.length; i++) {
    // Compare using the lowercase versions
    if (lowerUserInput[i] === lowerTextToWrite[i] && highLightedText === "") {
      continue; // Skip correct characters
    } else {
      if (i < textToWrite.length) {
        if (textToWrite[i] === " ") {
          highLightedText += "_"; // Replace spaces with underscores
        } else {
          highLightedText += textToWrite[i]; // Add the original character from textToWrite
        }
      }
    }
  }

  return highLightedText;
}

export function removeLetters(pieceofcode: string, userInput: string) {
  let newPieceOfCode = pieceofcode

  for (let i = 0; i < userInput.length; i++) {
    newPieceOfCode = newPieceOfCode.slice(1)
  }
  return newPieceOfCode
}

export function checkForWin(pieceofcode: string, count: number): boolean {
  if (count == pieceofcode.length) {
    return true
  }
  return false
}

export function newTextToWrite(existingText: string) {
  let newText;
  let sentances = sentencesData.sentences
  do {
    let randomNumber = Math.floor(Math.random() * sentencesData.sentences.length);
    newText = sentances[randomNumber]
  } while (newText == existingText)

  return newText
}

export function calcLevelRequirement(level: number): number {
  let levelRequirement: number

  if (level == 0) {
    levelRequirement = 40
  } else {
    levelRequirement = level * 40 + 10
  }

  return levelRequirement

}
