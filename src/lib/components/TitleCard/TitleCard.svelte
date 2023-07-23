<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { jumps } from '../../models/jumps.ts'; 
    import { cubicInOut } from 'svelte/easing';
    import JumpButton from '../JumpButton.svelte'; 
    import myFace from '$lib/assets/images/myFace.jpg'; 
	import { headerVisible, titleCardVisible } from '$lib/controllers/export.ts';
	import { onMount } from 'svelte';
	import { onObserve } from '$lib/domain/elements.ts';

    let generalDuration: number = 1000; 
    let generalDelay: number = 500; 
	let titleCardVisiblity: boolean
	let parallaxSpeed: number = 0.6; 
    export let scrollY: number; 

    function delayedFly(delay: number) {
        return { delay: delay, x: -250, duration: generalDuration }; 
    }
    
    titleCardVisible.subscribe(( value: boolean ) => {
		titleCardVisiblity = value; 
	})

	onMount(() => {
        onObserve(
            document.querySelector('#observable'), 
            {
                isIntersecting: () => {
                    titleCardVisible.show(); 
                    headerVisible.hide(); 
                }, 
                isNotIntersection: () => {
                    titleCardVisible.hide(); 
                    headerVisible.show(); 
                }, 
                threshold: 0, 
            }
        )
	}); 
    
</script>
<div id="observable" class="bg-primary h-screen flex items-center justify-center">
    {#if titleCardVisiblity == true}
        <div class="relative z-0" style:transform={`translate3d(0, ${scrollY * parallaxSpeed}px, 0)`}>
            <div class="h-screen flex items-center justify-center">
                <div class="grid lg:grid-cols-2 gap-8 items-center">
                    <div class="flex flex-col w-96 gap-y-8">
                        <h1 
                            transition:fly={{ y: -250, duration: generalDuration }}
                            class="h1 font-bold">
                            Loejee Miguel L. Dulaugon
                        </h1>
                        <p transition:fly={{ x: -250, duration: generalDuration }}>
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
    {/if}
</div>



