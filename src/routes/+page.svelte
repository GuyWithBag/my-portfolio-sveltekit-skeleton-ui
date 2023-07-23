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
	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import Contacts from "$lib/components/Contacts/Contacts.svelte";
	
	let curPortfolioIndex: number; 
	let scrollY: number; 
	
	function scrollBind(e: any) {
		scrollY = e!.target.scrollTop; 
	}

	currentPortfolioIndex.subscribe((value: number) => {
		curPortfolioIndex = value; 
	})
	
	import { spring } from 'svelte/motion';

	let coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});

	let size = spring(10);

</script>

<circle 
	cx={$coords.x}
	cy={$coords.y}
	class="circle-glow fixed z-[10] rounded-full" style="" 
/>

<div class="vignette fixed w-screen h-screen z-20"></div>

<div 
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
	class="h-screen overflow-scroll" on:scroll={scrollBind}
>
	<TitleCard scrollY={scrollY}/>
	<div class="relative z-10">
		<div  class="h-auto py-24 px-20 bg-surface-500 flex items-center justify-center rounded-3xl" id="works-container">
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
		<Contacts />
	</div>
</div> 

<style>
	.circle-glow {
		height: 70rem; 
		width: 70rem;
		background: radial-gradient(circle at 50% 50%, rgba(44, 61, 169, 0.43) 0%, rgba(255, 255, 255, 0) 100%); 
		transform:translate(-50%,-50%);
	}

	.vignette {
		pointer-events: none; 
		background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 59%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.1) 86%, rgba(0, 0, 0, 0.45) 100%);
	}

</style>