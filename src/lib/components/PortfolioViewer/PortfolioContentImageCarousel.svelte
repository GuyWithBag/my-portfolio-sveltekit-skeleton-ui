<script lang="ts">
	import { currentPortfolioIndex, previousPortfolioIndex } from "$lib/controllers/portfolioController";
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte'; 
	import ArrowRight from 'svelte-material-icons/ArrowRight.svelte'; 


	import type ImageSource from "$lib/models/ImageSource.ts"; 
	import { fly } from "svelte/transition";

    export let imageSources: ImageSource[] = []; 
	export let style: string = ""
	export let href: string = ""

	const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

    let elemCarousel: HTMLDivElement; 
	let currentIndex: number; 

	$: comparePorfolioIndex = currentIndex - previousPortfolioIndex; 
	$: flyDirection = clamp(comparePorfolioIndex, -1, 1); 

	currentPortfolioIndex.subscribe((value: number) => {
		currentIndex = value; 
	})

    function carouselLeft(): void {
        const x =
            elemCarousel.scrollLeft === 0
                ? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
                : elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
        elemCarousel.scroll(x, 0);
    }
    function carouselRight(): void {
        const x =
            elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
                ? 0 // loop
                : elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
        elemCarousel.scroll(x, 0);
    }

</script> 

<div 
	in:fly={{y: -200 * flyDirection}}
	class="card p-4 grid grid-cols-[auto_1fr_auto] items-center object-contain {style}"
>
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<ArrowLeft />
		</button>

		<!-- Full Images --> 
		<a href={href} target="_blank">
			<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
				{#each imageSources as imageSource}
					<img
						class="snap-center w-auto rounded-container-token object-contain p-1 max-h-[30rem]"
						src={imageSource.src}
						alt={imageSource.alt}
						loading="lazy"
					/> 
				{/each} 
			</div>
		</a>
		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<ArrowRight />
		</button>
</div>
