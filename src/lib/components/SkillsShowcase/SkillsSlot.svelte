<script lang="ts">
	import { logos } from '$lib/assets/images/logos/export';
	import { fade } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';

	export let skill: string;
</script>

<div
	transition:fade={{ duration: 0.2, easing: quadIn }}
	class="flex justify-center items-center bg-white shadow-md p-2 rounded-lg transition-all"
>
	{#if logos.has(skill)}
		<img class=" h-24 max-sm:h-16" alt={logos.get(skill)?.alt} src={logos.get(skill)?.src} />
	{/if}
</div>
