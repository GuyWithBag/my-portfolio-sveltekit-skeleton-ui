<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { headerVisible } from '$lib/controllers/headerController.ts'; 
	import { fly } from 'svelte/transition'; 
	import { jumps } from '$lib/models/jumps';
	import JumpButton from '$lib/components/JumpButton.svelte';
	import { appShellController } from '$lib/controllers/export';
	import ArrowUp from 'svelte-material-icons/ArrowUp.svelte'; 

	let visible: Boolean; 
	headerVisible.subscribe((value: boolean) => {
		visible = value; 
	})

	function handleScroll(e: any) {
		appShellController.set(e.scollY)
	}

</script> 

<!-- App Shell -->
<body style="overflow-x-hidden">
	<div style="display: contents" class="h-full overflow-hidden">
		<AppShell on:scroll={handleScroll}>
			<svelte:fragment slot="header">
				{#if visible}
				<!-- App Bar -->
					<div transition:fly={{ y: -70, duration: 300 }}>
						<AppBar>
							<svelte:fragment slot="lead">
								<strong class="text-xl uppercase">Loejee Miguel L. Dulaugon's Portfolio</strong>
							</svelte:fragment>
							<svelte:fragment slot="trail">
								<JumpButton jumpTo="title-card" style="btn-icon variant-ghost"><ArrowUp /></JumpButton>
								{#each jumps as jump}
									<JumpButton jumpTo={jump.id} style="btn variant-ghost">{jump.name}</JumpButton>
								{/each}
							</svelte:fragment>
						</AppBar>
					</div>
				{/if}
			</svelte:fragment>
			<!-- Page Route Content -->
			<slot />
		</AppShell>
	</div>
</body>