<script lang="ts">
	import { currentPortfolioIndex } from "$lib/controllers/portfolioController";
	import { onObserve } from "$lib/domain/elements";
	import { onMount } from "svelte";


    // let self: HTMLDivElement; 
    let visible: boolean = false; 

    function onWheel(event: WheelEvent) {
        // document.getElementById("works")!.scrollIntoView({behavior: "smooth"}); 
        preventDefault(event); 
        if(0 > event.deltaY){
            currentPortfolioIndex.back();
        } else {
            currentPortfolioIndex.next(); 
        }
    }
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    // var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e: any) {
        e.preventDefault();
        e.stopPropagation();
    }

    // function preventDefaultForScrollKeys(e: any) {
    //     if (keys[e.keyCode]) {
    //         preventDefault(e);
    //         return false;
    //     }
    //     return true; 
    // }

    onMount(() => {
        onObserve(
            document.querySelector("#works-container"), 
            {
                isIntersecting: () => visible = true,
                isNotIntersecting: () => visible = false, 
                threshold: 0, 
            }
        )
    })

</script>

{#if visible}
    <div on:wheel={onWheel} id="works">
        <slot />
    </div>
{/if}

