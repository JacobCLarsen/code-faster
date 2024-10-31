<script>
	import {
		compareText,
		updateTextColorRight,
		updateTextColorWrong,
		removeLetters,
		newTextToWrite
	} from '$lib/functions/textchecker.svelte';

	let {
		pieceofcode = $bindable(),
		userInput = $bindable(),
		input,
		completionState,
		count,
		...props
	} = $props();
	let displayCodeBlock = $state(pieceofcode);
	let rightLetters = $state('');
	let wrongLetters = $state('');
	let completionPercent = $state(0);
	pieceofcode = 'what the flippers!';

	$effect(() => {
		// @ts-ignore
		rightLetters = updateTextColorRight(pieceofcode, input);
		// @ts-ignore
		wrongLetters = updateTextColorWrong(pieceofcode, input);
		// @ts-ignore
		displayCodeBlock = removeLetters(pieceofcode, input);
	});
	$effect(() => {
		//@ts-ignore
		completionPercent = Math.round((count / codeblock.length) * 100);
	});
</script>

<div class="flex flex-col items-center">
	<div class="mb-10 flex flex-col items-center font-sans">
		<div class="mb-4">
			{#if completionState}
				<p class="">You have completed this codeblock!</p>
			{:else}
				<p class="">Completion: {completionPercent}%</p>
			{/if}
		</div>
		{#if completionState}
			<button
				onclick={() => {
					userInput = '';
                    //@ts-ignore
					pieceofcode = newTextToWrite(pieceofcode);
				}}
				class="rounded border border-solid border-slate-800 px-2 py-1">Next piece of code!</button
			>
		{/if}
	</div>
	<div>
		<p class="mb-1 font-codefont">
			<span class="text-green-600">{rightLetters}</span><span class="text-red-600"
				>{wrongLetters}</span
			><span>{displayCodeBlock}</span>
		</p>
	</div>
</div>

<style>
</style>
