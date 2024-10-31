<script>
	let { value = $bindable(), ...props } = $props();
	/**
	 * @type {HTMLInputElement}
	 */
	let inputField;

	$effect(() => {
		if (value == '') {
			// Not the most optimal. Fix this
			//@ts-ignore
			inputField.focus();
		}
	});
</script>

<input bind:value {...props} bind:this={inputField} />

<style>
	input {
		color: deeppink;
	}
</style>
