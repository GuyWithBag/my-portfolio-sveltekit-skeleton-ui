<script lang="ts">
	import { currentPortfolioIndex } from '$lib/controllers/portfolioController';
    import ArrowDown from 'svelte-material-icons/ArrowDown.svelte'; 
    import ArrowUp from 'svelte-material-icons/ArrowUp.svelte'; 

    export let imagesAtRight: boolean = true; 
</script>

<div class="flex flex-col justify-center content-center">
    <button on:click={currentPortfolioIndex.back} class="btn">
        <ArrowUp size="2rem"/>
    </button>
    <div class="lg:max-h-[33rem] overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-3 justify-items-center overflow-hidden">
            {#if imagesAtRight == false}
                <slot name="images" /> 
            {/if}
            <div class="grid grid-rows-2 gap-2">
                <slot name="bio" />
                <div class="grid lg:grid-cols-2 gap-2">
                    <slot name="actions" />
                </div>
            </div>
            {#if imagesAtRight == true}
                <slot name="images" /> 
            {/if}
        </div>
    </div>
    <button on:click={currentPortfolioIndex.next} class="btn">
        <ArrowDown size="2rem"/>
    </button>
</div>
