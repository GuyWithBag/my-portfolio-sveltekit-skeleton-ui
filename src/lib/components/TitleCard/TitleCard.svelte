<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { jumps } from '../../models/jumps.ts'; 
    import { cubicInOut, quadIn } from 'svelte/easing';
    import JumpButton from '../JumpButton.svelte'; 
    import myFace from '$lib/assets/images/myFace.jpg'; 
    import spaceBackground from "$lib/assets/images/background/kai-pilger-space.jpg"
	import { headerVisible, titleCardVisible } from '$lib/controllers/export.ts';
	import { onMount } from 'svelte';
	import { onObserve } from '$lib/domain/elements.ts';

    let generalDuration: number = 1000; 
    let generalDelay: number = 500; 
	let titleCardVisiblity: boolean
	let parallaxSpeed: number = 0.6; 
    let spaceBgFade: number = 5000; 
    export let scrollY: number; 

    function delayedFly(delay: number) {
        return { delay: spaceBgFade + delay, x: -250, duration: generalDuration }; 
    }
    
    titleCardVisible.subscribe(( value: boolean ) => {
		titleCardVisiblity = value; 
	})

	onMount(() => {
        onObserve(
            document.querySelector('#title-card'), 
            {
                isIntersecting: () => {
                    titleCardVisible.show(); 
                    headerVisible.hide(); 
                }, 
                isNotIntersecting: () => {
                    titleCardVisible.hide(); 
                    headerVisible.show(); 
                }, 
                threshold: 0, 
            }
        )
	}); 
    
</script>

<div id="title-card"  class="h-screen flex items-center justify-center relative z-[0]">
    {#if titleCardVisiblity == true}
            <div class="vignette h-screen w-screen fixed z-[2]"></div>
            <div 
                transition:fade={{duration: spaceBgFade, easing: quadIn}}
                class=" bg-[url({spaceBackground})] h-full w-full flex items-center justify-center relative z-[0]"
            >
                <div class="relative z-[3]" style:transform={`translate3d(0, ${scrollY * parallaxSpeed}px, 0)`}>
                    <div class="h-screen flex items-center justify-center">
                        <div class="grid lg:grid-cols-2 gap-8 items-center">
                            <div class="flex flex-col w-96 gap-y-8">
                                <h1 
                                    transition:fly={{ y: -250, duration: generalDuration, delay: spaceBgFade }}
                                    class="h1 font-bold">
                                    Loejee Miguel L. Dulaugon
                                </h1>
                                <p transition:fly={{ x: -250, duration: generalDuration, delay: spaceBgFade }}>
                                    I am a flexible programmer learner capable of software engineering, game development and web development. 
                                    With tools such as Flutter, Godot Engine and Svelte
                                </p>
                                <div class="grid grid-cols-3 gap-3">
                                    <button 
                                        in:fly={delayedFly(generalDelay)}
                                        type="button" 
                                        class="btn variant-filled !bg-primary-500 !text-white"
                                    >
                                        My Resume
                                    </button>
                                    {#each jumps as jump}
                                        <div in:fly={delayedFly((jumps.indexOf(jump) + 2) * generalDelay)}>
                                            <JumpButton jumpTo={jump.id}>{jump.name}</JumpButton>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <img 
                                transition:fade={{duration: generalDuration * 3, easing: cubicInOut }}
                                class="object-cover h-96 w-96 rounded-full" 
                                src={myFace} 
                                alt="My Face"
                            />
                        </div>
                    </div>
                </div>
            </div>
    {/if}
</div>

<style>
    .vignette {
        pointer-events: none; 
        background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 15%, rgba(0, 0, 0, 0.05) 35%, rgba(0, 0, 0, 0.1) 65%, rgba(0, 0, 0, 0.45) 100%);
    }
</style>



