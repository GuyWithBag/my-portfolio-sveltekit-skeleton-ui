<script lang="ts">
	import { ImagesDirection, currentPortfolioIndex } from '$lib/controllers/portfolioController';
	import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
	import ArrowLeft from 'svelte-material-icons/ArrowLeft.svelte';
	import ArrowDown from 'svelte-material-icons/ArrowDown.svelte';
	import ArrowUp from 'svelte-material-icons/ArrowUp.svelte';
	import { onMount } from 'svelte';

	export let imagesDirection: ImagesDirection = ImagesDirection.RIGHT;

	let isLargeScreen: boolean = false;

	onMount(async () => {
		const window = await import('$lib/domain/window');
		isLargeScreen = window.isLargeScreen();
	});
</script>

<div class="flex max-sm:flex-col flex-row lg:min-h-[34rem] justify-center content-center">
	<button on:click={currentPortfolioIndex.back} class="btn max-sm:flex hidden">
		<ArrowUp size="2rem" />
	</button>
	<button on:click={currentPortfolioIndex.back} class="btn max-sm:hidden">
		<ArrowLeft size="2rem" />
	</button>
	<div class="overflow-hidden">
		<div
			class="grid {imagesDirection == ImagesDirection.TOP
				? ''
				: 'lg:grid-cols-2'} gap-3 justify-items-center overflow-hidden"
		>
			{#if imagesDirection == ImagesDirection.RIGHT || isLargeScreen == false || imagesDirection == ImagesDirection.TOP}
				<slot name="images" />
			{/if}
			<div class="bio gap-2">
				<slot name="bio" />
				<div class="grid grid-rows-2 gap-3">
					<slot name="actions" />
				</div>
			</div>
			{#if imagesDirection == ImagesDirection.LEFT && isLargeScreen == true}
				<slot name="images" />
			{/if}
		</div>
	</div>
	<button on:click={currentPortfolioIndex.back} class="btn max-sm:flex hidden">
		<ArrowDown size="2rem" />
	</button>
	<button on:click={currentPortfolioIndex.next} class="btn max-sm:hidden">
		<ArrowRight size="2rem" />
	</button>
</div>

<style>
	.bio {
		display: grid;
		grid-template-rows: auto auto;
		justify-content: start;
	}
</style>
