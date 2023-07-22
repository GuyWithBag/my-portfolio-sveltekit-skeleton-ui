<script lang="ts">
	import TitleCard from "$lib/components/TitleCard/TitleCard.svelte";
	import { onMount } from 'svelte';
	import { headerVisible } from '$lib/controllers/headerController'; 
	import { scrollRef, scrollTop } from 'svelte-scrolling'
	import PortfolioViewer from "$lib/components/PortfolioViewer/PortfolioViewer.svelte";
	import PortfolioContent from "$lib/components/PortfolioViewer/PortfolioContent.svelte";
	import PortfolioContentBio from "$lib/components/PortfolioViewer/PortfolioContentBio.svelte";
	import PortfolioContentImages from "$lib/components/PortfolioViewer/PortfolioContentImageCarousel.svelte";
	import ImageSource from "$lib/models/ImageSource.ts"; 

	onMount(() => {
		const div: Element | null = document.querySelector('#observable');

		const observerCallback = (entries: any, observer: any) => {
			entries.forEach((entry: any) => {
				// isIntersecting will be true when div is visible
				if (entry.isIntersecting) {
					headerVisible.hide(); 
				} else {
					headerVisible.show(); 
				}
			});
		}
		
		const observerOptions = { threshold: 0.1 };
		const observer = new IntersectionObserver(observerCallback, observerOptions);
		
		observer.observe(div!);
	}); 

	let chainReactionImages: ImageSource[] = [
		new ImageSource(
			'src/lib/assets/images/portfolioImages/chain-reaction-game/main_menu.png', 
			"main_menu"
		)
	]

</script>

<div class="h-screen w-screen mx-auto overflow-scroll">
	<div id="observable">
		<TitleCard />
	</div>
	<div use:scrollRef={"works"} class="h-auto p-20 bg-surface-500 flex items-center justify-center">
		<PortfolioViewer>
			<PortfolioContent>
				<div slot="bio">
					<PortfolioContentBio>
						<span slot="title">Chain Reaction</span>
						<p slot="body">
							BODYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYy
						</p>
					</PortfolioContentBio>
				</div>
				<div slot="images">
					<PortfolioContentImages imageSources={chainReactionImages}/>
				</div>
			</PortfolioContent>
		</PortfolioViewer>
	</div>
</div> 

