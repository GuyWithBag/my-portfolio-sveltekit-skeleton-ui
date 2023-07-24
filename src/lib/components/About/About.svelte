<script lang="ts">
	import { onMount } from "svelte";


	import AboutParagraphBlock from "../AboutParagraphBlock.svelte";
	// import { appShellController } from "$lib/controllers/appshellController";
	import { fade, fly } from "svelte/transition";
	import { cubicInOut } from "svelte/easing";
	import { onObserve } from "$lib/domain/elements";
	import { spin } from "$lib/transitions/spin";
    import BlueFeel from "$lib/assets/images/background/blue_feel.png"; 
    import LuluGIF from "$lib/assets/gifs/lulu.gif"; 
    
    // let scrollY: number; 

	// let parallaxSpeed: number = 0.6; 

    // let self: HTMLElement;  
    // let rect: DOMRect;
    // let divY: number;
    // let parallaxScroll: number; 

    // appShellController.subscribe((value: number) => {
    //     scrollY = value; 
    //     handleScroll(); 
    // })

    // function handleScroll() {
    //     alert(self)
    //     rect = self.getBoundingClientRect(); 
    //     divY = rect.top + scrollY; 
    //     parallaxScroll = divY + scrollY * parallaxSpeed; 
    //     alert()
    // }

    let visible: boolean = false; 

    onMount(() => {
        onObserve(
            document.querySelector("#about"), 
            {
                isIntersecting: () => visible = true, 
                isNotIntersecting: () => visible = false, 
                threshold: 0.7
            }
        )
    })

$: {
    console.log(BlueFeel); 
}

</script>

<div class="h-screen">
    <div 
        id="about" 
        class="BlueFeel flex h-screen items-center justify-center relative z-[1]"
    >
        {#if visible}
            <div class="grid lg:grid-cols-2 w-[60rem] justify-center items-center">
                <div transition:spin={{duration: 1000, easing: cubicInOut, times: 8}}>
                    <img  
                        src={LuluGIF}
                        alt="Lulu Legends Of Runterra Emote"
                    />
                </div>
                <div class="grid justify-items-start items-start justify-center gap-2">
                    <div transition:fly={{x: 200, duration: 1000, easing: cubicInOut}}>
                        <AboutParagraphBlock>
                            I am a young passionate learner who has much more to offer in the future with my creative ideas. 
                        </AboutParagraphBlock>
                    </div>
                    <div in:fly={{y: 200, duration: 700, delay: 500, easing: cubicInOut}} out:fade={{duration: 500}}>
                        <AboutParagraphBlock>
                            I hope to see one day that those ideas, skills and abilities will be achieved. 
                        </AboutParagraphBlock>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .BlueFeel {
        background-image: url("../../assets/images/background/blue_feel.png"); 
    }
    
</style>

