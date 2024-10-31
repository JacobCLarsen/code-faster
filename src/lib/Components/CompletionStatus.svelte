<script>
    let {completionState, count, codeblock, ...props} = $props()
    let completionPercent = $state(0)

    $effect(() => {
        //@ts-ignore
			completionPercent = Math.round(count/codeblock.length * 100)
		 });
</script>

<div class="flex flex-col items-center mb-20 font-sans">   
    <div class="mb-4">
        {#if completionState}
        <p class="">You have completed this codeblock!</p>
        {:else}
        <p class=""> Completion: {completionPercent}% </p>
        {/if}
    </div>

    {#if completionState}
        <button class="rounded px-2 py-1 border border-solid border-slate-800">Next piece of code!</button>
    {/if}
</div>
