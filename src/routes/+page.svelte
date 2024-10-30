<script lang="ts">
    import Codeblock from "$lib/Components/codeblock.svelte";
    import Inputbox from "$lib/Components/Inputbox.svelte";
	import { compareText } from "$lib/functions/textchecker.svelte";
	import { hello } from "$lib/functions/textchecker.svelte";

    	let message = $state('hello');
		let pieceofcode = "Hello mister"
		let count = $state(0)

		$effect(() => {
			count = compareText(message, pieceofcode)
		 });
</script>

<main>
    <div class="mt-44 flex flex-col items-center justify-center">
        <div class="flex flex-col items-center marker:font-codefont">
            <Codeblock text={pieceofcode}/>
			<p>Count is: {count}</p>
        </div>
        <div class="mt-8 font-codefont">
            <Inputbox class="border border-solid border-slate-800 rounded px-4 py-2 focus:outline-none" bind:value={message}/>
        </div>
    </div>
</main>
