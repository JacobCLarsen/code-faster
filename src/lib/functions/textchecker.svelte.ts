export function compareText(input: string, codeblock: string): number{
    let count = 0
        for (let i = 0; i< input.length; i++) {
          if (input[i] == codeblock[i]) {
            count ++
          } else {
            break
          }
           
        }

        return count
}

export function updateTextColor(textToWrite: string, userInput: string){
    let highLightedText = ""

    for (let i = 0; i< userInput.length; i++) {
          if (userInput[i] == textToWrite[i]) {
            highLightedText += `<span style="color: green;">${userInput[i]}</span>`;
          } else {
            for (let j = i; j < userInput.length; j++) {
              highLightedText += `<span style="color: red;">${userInput[j]}</span>`;
              
            }
          }
        }

        return highLightedText

    
}