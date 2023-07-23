<script lang="ts">
    import { logos } from '$lib/assets/images/logos/export.ts'; 
	import { typewriter } from '$lib/transitions/typewriter';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import LogoButton from '../LogoButton.svelte'; 
    
    export let displayLogos: String[]; 

    let headerWriteDuration: number = 200; 

</script>

<div class="flex flex-col gap-y-5 w-96 justify-start content-start" in:fade={{duration: 300, easing: cubicInOut}}>
    <h1 class="h2 font-bold" in:typewriter={{duration: headerWriteDuration}}>
        <slot name="title" />
    </h1>
    <div class="grid gap-2 justify-start grid-cols-3 overflow-visible grid-flow-dense " >
        {#each displayLogos as logo}
            {#if logos.has(logo)}
                <LogoButton 
                    logo={logos.get(logo)?.src} 
                    alt={logos.get(logo)?.alt}
                    label={logos.get(logo)?.name}
                />
            {/if}
        {/each}
    </div>
    <div class=" text-1xl" in:typewriter={{delay: headerWriteDuration, duration: 2000}}>
        <slot name="body"/>
    </div>
</div>

