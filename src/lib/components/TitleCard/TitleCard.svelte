<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { jumps } from '../../models/jumps.ts'; 
    import { cubicInOut, quadIn } from 'svelte/easing';
    import JumpButton from '../JumpButton.svelte'; 
    import myFace from '$lib/assets/images/myFace.jpg'; 
	import { headerVisible, titleCardVisible } from '$lib/controllers/export.ts';
	import { onMount } from 'svelte';
	import { onObserve } from '$lib/domain/elements.ts';

    let generalDuration: number = 1000; 
    let generalDelay: number = 500; 
	let titleCardVisiblity: boolean
	let parallaxSpeed: number = 1.5; 
    let spaceBgFade: number = 3500; 
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
                class=" space-background h-full w-full flex items-center justify-center relative z-[0]"
            >
                <div class="relative z-[3]" style:transform={`translate3d(0, ${scrollY * parallaxSpeed}px, 0)`}>
                    <div class="h-screen flex items-center justify-center">
                        <div class="grid lg:grid-cols-2 gap-x-8 ga-y-1 place-items-center lg:w-[50rem] w-[19rem]">
                            <div class="flex flex-col lg:gap-y-5 gap-1">
                                <h1 
                                    transition:fly={{ y: -250, duration: generalDuration, delay: spaceBgFade }}
                                    class="h1 font-bold lg:text-left text-center">
                                    Loejee Miguel L. Dulaugon
                                </h1>
                                <p class="lg:text-[15px] lg:text-left text-center" transition:fly={{ x: -250, duration: generalDuration, delay: spaceBgFade + 500}}>
                                    I am a flexible programmer learner capable of software engineering, game development and web development. 
                                    With tools such as Flutter, Godot Engine and Svelte
                                </p>
                                <div class="grid grid-cols-3 gap-1 lg:gap-3">
                                    <a href="src\lib\assets\downloads\LoejeeMiguel_Dulaugon_Resume.pdf"
                                        in:fly={delayedFly(generalDelay)}
                                        type="button" 
                                        class="btn variant-filled !bg-primary-500 !text-white text-[13px] lg:text-[16px]"
                                    >
                                        My Resume
                                    </a>
                                    {#each jumps as jump}
                                        <div in:fly={delayedFly((jumps.indexOf(jump) + 2) * generalDelay)}>
                                            <JumpButton jumpTo={jump.id}>{jump.name}</JumpButton>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <img 
                                transition:fade={{duration: generalDuration * 3, easing: cubicInOut, delay: spaceBgFade }}
                                class="object-cover lg:h-96 lg:w-96 h-64 w-64 rounded-full self-center" 
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

    .space-background {
        background-image: url("../../assets/images/background/kai-pilger-space.jpg") !important; 
    }
    
</style>



