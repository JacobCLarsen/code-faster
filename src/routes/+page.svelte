<script lang="ts">
    import Codeblock from "$lib/Components/codeblock.svelte";
    import Inputbox from "$lib/Components/Inputbox.svelte";
    import CompletionStatus from "$lib/Components/CompletionStatus.svelte";
	import { compareText } from "$lib/functions/textchecker.svelte";
    import { checkForWin } from "$lib/functions/textchecker.svelte";

    	let userInput = $state("");
		let pieceofcode: string = $state("the quick brown fox jumps over the lazy dog")
		let count = $state(0)
        let completionState = $state(false)


		$effect(() => {
			count = compareText(userInput, pieceofcode)
            completionState = checkForWin(pieceofcode, count)
            
            if (completionState){
                console.log("You have compelted the text!")
            }
		 });
</script>

<main>
    <div class="mt-44 flex flex-col items-center justify-center">
        <div class="flex flex-col items-center marker:font-codefont">
            <CompletionStatus completionState={completionState} count={count} codeblock={pieceofcode}/>
            <Codeblock pieceofcode={pieceofcode} input={userInput}/>
			<p>Count is: {count}</p>
        </div>
        <div class="mt-8 font-codefont">
            <Inputbox class="border border-solid border-slate-800 rounded px-4 py-2 focus:outline-none" bind:value={userInput} />
        </div>
    </div>
</main>
