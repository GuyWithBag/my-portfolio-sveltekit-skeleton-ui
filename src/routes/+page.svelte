<script lang="ts">
	import TitleCard from "$lib/components/TitleCard/TitleCard.svelte";
	import { onMount } from 'svelte';
	import { currentPortfolioIndex, PortfolioItems } from '$lib/controllers/export.ts'; 
	import PortfolioViewer from "$lib/components/PortfolioViewer/PortfolioViewer.svelte";
	import PortfolioContent from "$lib/components/PortfolioViewer/PortfolioContent.svelte";
	import PortfolioContentBio from "$lib/components/PortfolioViewer/PortfolioContentBio.svelte";
	import PortfolioContentImages from "$lib/components/PortfolioViewer/PortfolioContentImageCarousel.svelte"; 
	import { chainReactionImages } from '$lib/assets/images/portfolioImages/chainReactionGame/export.ts'; 
	import { morseCodeTorchImages } from '$lib/assets/images/portfolioImages/morseCodeTorch/export.ts'; 
	import GooglePlayButton from "$lib/components/CustomButtons/GooglePlayButton.svelte";
	import AboutParagraphBlock from "$lib/components/AboutParagraphBlock.svelte";
	import About from "$lib/components/About/About.svelte";
	
	let curPortfolioIndex: number; 
	let scrollY: number; 
	
	function scrollBind(e: any) {
		scrollY = e!.target.scrollTop; 
	}

	currentPortfolioIndex.subscribe((value: number) => {
		curPortfolioIndex = value; 
	})
	
	// ToDO: Whenever the element is overvable, play an animation
	onMount(() => {

	}); 

</script>

<div class="h-screen overflow-scroll" on:scroll={scrollBind}>
	<TitleCard scrollY={scrollY}/>
	<div class="relative z-10">
		<div  class="h-auto py-24 px-20 bg-surface-500 flex items-center justify-center rounded-3xl">
			<div class="px-[10rem]">
				<PortfolioViewer>
					{#if curPortfolioIndex == PortfolioItems.MUSIC_PLAYER}
						<PortfolioContent>
							<div slot="bio">
								<PortfolioContentBio displayLogos={["Flutter", "Dart", "HiveDB"]}>
									<span slot="title">Music Player</span>
									<p slot="body">
										I was tired of finding things that are lacking in most music players. <br>
										<br>
										So i have decided to make my own! This is a work-in-progress project that aims to have a cloud containing 
										all your music that you have downloaded shared across various platforms <br> 
										Not only that, but it will have an option where you can play the music while overlapping with other audios. 
									</p>
								</PortfolioContentBio>
							</div>
							<div slot="actions">
								<GooglePlayButton href=""/>
							</div>
							<div slot="images">
								<PortfolioContentImages imageSources={chainReactionImages}/>
							</div>
						</PortfolioContent>
					{:else if curPortfolioIndex == PortfolioItems.MORSE_CODE_TORCH}
						<PortfolioContent>
							<div slot="bio">
								<PortfolioContentBio displayLogos={["Flutter", "Dart", "HiveDB", "GoogleAdMob"]}>
									<span slot="title">Morse Code Torch</span>
									<p slot="body">
										A fun, useful app that you and your friends can use in order to communicate to each other at night in long distances using your flashlight. <br>
										<br>
										Features: <br>
										- Save your previous morse codes <br>
										- Change the duration of each unit <br>
										- Morse-code to text, text to Morse-code <br>
									</p>
								</PortfolioContentBio>
							</div>
							<div slot="actions">
								<GooglePlayButton href=""/>
							</div>
							<div slot="images">
								<PortfolioContentImages imageSources={morseCodeTorchImages}/>
							</div>
						</PortfolioContent>
					{:else if curPortfolioIndex == PortfolioItems.CHAIN_REACTION_ATOM}
						<PortfolioContent imagesAtRight={false}>
							<div slot="bio">
								<PortfolioContentBio displayLogos={["Godot", "GDScript", "GoogleAdMob"]}>
									<span slot="title">Chain Reaction: Atom Supreme Revamped</span>
									<p slot="body">
										Chain Reaction Atom Revamped Supreme is your classic childhood strategy game re-imagined in a much more colorful/modern settings. This revamp shows much more explosive and expressive graphics and animations. <br>
										<br>
										Summary: <br>
										- Win the game by capturing all the enemy's atoms / colors by expanding your army of atoms in a strategic way by overloading your atoms. Which will start a chain reaction showing a colorful firework display until it destroys your enemies! <br>
									</p>
								</PortfolioContentBio>
							</div>
							<div slot="actions">
								<GooglePlayButton href=""/>
							</div>
							<div slot="images">
								<PortfolioContentImages imageSources={chainReactionImages}/>
							</div>
						</PortfolioContent>
					{/if}
				</PortfolioViewer>
			</div>
		</div>
		<About/>
		<div id="contacts" class="flex h-screen items-center justify-center bg-slate-950">
			<div class="flex flex-col card variant-filled w-[60rem] p-10 gap-10">
				<h1 class="h1 uppercase"><strong>Let's Connect!</strong></h1>
				<div class="grid grid-flow-row gap-2" style='grid-template-columns: repeat(5, 1fr); grid-auto-rows: 1fr;'>
					<div class="btn variant-ghost font-bold" style="grid-area: 1 / 1 / 1 / 5;">I AM ALWAYS AVAILABLE AS: </div>
					<div class="btn variant-ghost" style="grid-area: 1 / 5 / 1 / -1;"></div>
					<div class="btn variant-ghost" style="grid-area: 2 / 1 / 2 / 3;">SOFTWARE ENGINEER</div>
					<div class="btn variant-ghost" style="grid-area: 2 / 3 / 2 / -1;"></div>
					<div class="btn variant-ghost" style="grid-area: 3 / 1 / 3 / 2;"></div>
					<div class="btn variant-ghost" style="grid-area: 3 / 2 / 3 / -1;">GAME DEVELOPER</div>
					<div class="btn variant-ghost" style="grid-area: 4 / 1 / 4 / 4;">FRONT-END ENGINEER</div>
					<div class="btn variant-ghost" style="grid-area: 4 / 4 / 4 / -1;"></div>
					<div class="btn variant-ghost" style="grid-area: 5 / 1 / 5 / 3;"></div>
					<div class="btn variant-ghost" style="grid-area: 5 / 3 / 5 / -1;">WEB DEVELOPER</div>

				</div>
				<hr />
				<div class="grid grid-cols-4">
					<a href="" class="btn text-2xl">GitHub</a>
					<a href="" class="btn text-2xl">Email</a>
					<a href="" class="btn text-2xl">Playstore</a>
					<a href="" class="btn text-2xl">LinkedIn</a>
					<a href="" class="btn text-2xl">UpWork</a>
				</div>
			</div>
		</div>
	</div>
</div> 

