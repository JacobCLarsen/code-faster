<script lang="ts">
	import Codeblock from '$lib/Components/codeblock.svelte';
	import Inputbox from '$lib/Components/Inputbox.svelte';
	import { compareText } from '$lib/functions/textchecker.svelte';
	import { checkForWin } from '$lib/functions/textchecker.svelte';

	let userInput = $state('');
	let pieceofcode: string = $state('');
	let count = $state(0);
	let completionState = $state(false);

	$effect(() => {
		count = compareText(userInput, pieceofcode);
		completionState = checkForWin(pieceofcode, count);
	});
</script>

<div class="mt-44 flex flex-col items-center justify-center">
	<div>
		<Codeblock bind:pieceofcode bind:userInput input={userInput} {completionState} {count} />
	</div>
	<div class="mt-8 font-codefont">
		<Inputbox
			class="rounded border border-solid border-slate-800 px-4 py-2 focus:outline-none"
			bind:value={userInput}
		/>
	</div>
</div>

<style>
</style>
