<script lang="ts">
	import { currentPortfolioIndex } from '$lib/controllers/portfolioController';
    import ArrowDown from 'svelte-material-icons/ArrowDown.svelte'; 
    import ArrowUp from 'svelte-material-icons/ArrowUp.svelte'; 
	import { onMount } from 'svelte';

    export let imagesAtRight: boolean = true; 

    let isLargeScreen: boolean = false; 

    onMount( async () => {
        const window = await import('$lib/domain/window')  
        isLargeScreen = window.isLargeScreen()
    })

    function update() {
        
    }

</script>

<div class="flex flex-col lg:min-h-[34rem] justify-center content-center">
    <button on:click={currentPortfolioIndex.back} class="btn">
        <ArrowUp size="2rem"/>
    </button>
    <div class="overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-3 justify-items-center overflow-hidden">
            {#if imagesAtRight == false || isLargeScreen == false}
                <slot name="images" /> 
            {/if}
            <div class="bio gap-2"> 
                <slot name="bio" />
                <div class="grid grid-cols-2 gap-2">
                    <slot name="actions" />
                </div> 
            </div>
            {#if imagesAtRight == true && isLargeScreen == true} 
                <slot name="images" /> 
            {/if}
        </div>
    </div>
    <button on:click={currentPortfolioIndex.next} class="btn">
        <ArrowDown size="2rem"/>
    </button>
</div>

<style>
    .bio {
        display: grid; 
        grid-template-rows: auto auto;
        justify-content: start; 
    }
</style>