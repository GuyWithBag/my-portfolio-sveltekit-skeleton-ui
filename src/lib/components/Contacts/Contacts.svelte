<script lang="ts">
	import { onObserve } from "$lib/domain/elements";
	import { onMount } from "svelte";


	import { quintOut } from "svelte/easing";
	import { fade } from "svelte/transition"; 

    let visible: boolean = false; 

    onMount(() => {
        onObserve(
            document.querySelector("#contacts"), 
            {
                isIntersecting: () => visible = true, 
                isNotIntersecting: () => visible = false, 
                threshold: 0
            }
        )
    }) 

</script> 

<div id="contacts" class="flex h-screen items-center justify-center bg-slate-950">
    {#if visible}
        <div 
            class="flex flex-col card variant-filled w-[60rem] p-10 gap-10"
            transition:fade={{duration: 2000, easing: quintOut}}
        >
            <h1 class="h1 uppercase"><strong>Let's Connect!</strong></h1>
            <div class="grid grid-flow-row gap-2" style='grid-template-columns: repeat(5, 1fr); grid-auto-rows: 1fr;'>
                <div class="btn variant-ghost font-bold text-xl" style="grid-area: 1 / 1 / 1 / 5;">I AM ALWAYS AVAILABLE AS: </div>
                <div class="btn variant-ghost text-xl" style="grid-area: 1 / 5 / 1 / -1;"></div>
                <div class="btn variant-ghost text-xl" style="grid-area: 2 / 1 / 2 / 3;">SOFTWARE ENGINEER</div>
                <div class="btn variant-ghost text-xl" style="grid-area: 2 / 3 / 2 / -1;"></div>
                <div class="btn variant-ghost text-xl" style="grid-area: 3 / 1 / 3 / 2;"></div>
                <div class="btn variant-ghost text-xl" style="grid-area: 3 / 2 / 3 / -1;">GAME DEVELOPER</div>
                <div class="btn variant-ghost text-xl" style="grid-area: 4 / 1 / 4 / 4;">FRONT-END ENGINEER</div>
                <div class="btn variant-ghost text-xl" style="grid-area: 4 / 4 / 4 / -1;"></div>
                <div class="btn variant-ghost text-xl" style="grid-area: 5 / 1 / 5 / 3;"></div>
                <div class="btn variant-ghost text-xl" style="grid-area: 5 / 3 / 5 / -1;">WEB DEVELOPER</div>
            </div>
            <hr />
            <div class="grid grid-cols-4">
                <a href="https://github.com/GuyWithBag" class="btn text-2xl">GitHub</a>
                <a href="loejeemigueldulaugon@gmail.com" class="btn text-2xl">Email</a>
                <!-- <a href="" class="btn text-2xl">Playstore</a> -->
                <a href="https://www.linkedin.com/in/loejee-miguel-dulaugon-805480284/" class="btn text-2xl">LinkedIn</a>
                <!-- <a href="" class="btn text-2xl">UpWork</a> -->
            </div>
        </div>
    {/if}
</div>