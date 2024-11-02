<script lang="ts">
	import {
		compareText,
		updateTextColorRight,
		updateTextColorWrong,
		removeLetters,
		newTextToWrite,
		calcLevelRequirement
	} from '$lib/functions/textchecker.svelte';

	import tutorialData from '$lib/assets/tutorial.json';

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
	let levelProgress = $state(0);
	let points: number = $state(0);
	let level: number = $state(0);
	let LevelRequirement: number = $state(0);
	let tutorialActive = true;
	let tutorialSentenceses = tutorialData.tutorial;
	let tutorialState = 0;

	pieceofcode = tutorialSentenceses[tutorialState];

	$effect(() => {
		// @ts-ignore
		rightLetters = updateTextColorRight(pieceofcode, input);
		// @ts-ignore
		wrongLetters = updateTextColorWrong(pieceofcode, input);
		// @ts-ignore
		displayCodeBlock = removeLetters(pieceofcode, input);
	});

	$effect(() => {
		if (completionState) {
			if (!tutorialActive) {
				//@ts-ignore
				pieceofcode = newTextToWrite(pieceofcode);
			} else if (tutorialState < 5) {
				tutorialState++;
				pieceofcode = tutorialSentenceses[tutorialState];
			} else {
				tutorialActive = false;
			}

			userInput = '';
			points = points + 20;
			LevelRequirement = calcLevelRequirement(level);

			if (points >= LevelRequirement) {
				level++;
				points = points - LevelRequirement;
			}

			levelProgress = (points / LevelRequirement) * 100;
		}
	});
</script>

<div class="flex flex-col items-center">
	<div class="mb-10 flex flex-col items-center font-sans">
		<div class="mb-4 w-40">
			<p class="mb-2">Level: {level}</p>
			<div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
				<div class="h-2.5 rounded-full bg-blue-600" style="width: {levelProgress}%"></div>
			</div>
		</div>
	</div>
	<div>
		<p class="mb-1 font-codefont">
			<span class="text-green-700">{rightLetters}</span><span class="text-red-600"
				>{wrongLetters}</span
			><span>{displayCodeBlock}</span>
		</p>
	</div>
</div>

<style>
</style>
