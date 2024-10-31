<script>
    import { compareText, updateTextColorRight, updateTextColorWrong, removeLetters } from "$lib/functions/textchecker.svelte";



    let {pieceofcode, input, ...props} = $props()
    let displayCodeBlock = $state(pieceofcode)
    let rightLetters = $state("")
    let wrongLetters = $state("")


    $effect(() => {
		// @ts-ignore
		rightLetters = updateTextColorRight(pieceofcode, input)
        // @ts-ignore
        wrongLetters = updateTextColorWrong(pieceofcode, input)
        // @ts-ignore
        displayCodeBlock = removeLetters(pieceofcode, input)
	 });

</script>

<p class="font-codefont mb-1">
    <span class="text-green-600">{rightLetters}</span><span class="text-red-600">{wrongLetters}</span><span>{displayCodeBlock}</span>
</p>

<style>

</style>