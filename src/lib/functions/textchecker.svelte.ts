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

export function hello(message: string){
    console.log(message)
}