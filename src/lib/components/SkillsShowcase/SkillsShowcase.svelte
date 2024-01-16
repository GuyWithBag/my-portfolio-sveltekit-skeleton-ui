<script lang="ts">
	import type { SkillsTabModel } from '$lib/models/skillsTabModel';
	import SkillsSlot from './SkillsSlot.svelte';
	import SkillsTab from './SkillsTab.svelte';

	let tabs: SkillsTabModel[] = [
		{
			name: 'Frameworks',
			skills: ['Flutter', 'React', 'Godot', 'Svelte', 'Next']
		},
		{
			name: 'Technologies',
			skills: ['Zustand', 'TailWind', 'Firebase', 'GoogleAdMob', 'HiveDB', 'GithubMark']
		},
		{
			name: 'Languages',
			skills: ['Javascript', 'TypeScript', 'Python', 'Dart', 'GDScript']
		}
	];

	$: currentTabIndex = 0;
	$: currentTab = tabs[currentTabIndex]!;
</script>

<!-- Flutter, React, Svelte, Godot Engine -->
<!-- Dart, Javascript, Typescript, MySQL, C#, Python, GDScript, MySQL -->
<!-- Zustand, Tailwind, Firebase, Admob, HiveDB, Git -->

<div>
	<div class="flex flex-col gap-3 w-[50rem] justify-center items-center">
		<div class="flex flex-row gap-3">
			{#each tabs as tab}
				<!-- ToDO: Add tabs functionality -->
				<SkillsTab
					{tab}
					onClick={() => {
						currentTabIndex = tabs.indexOf(tab);
					}}
				/>
			{/each}
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,130px)] min-w-[50rem] gap-4">
			{#each currentTab.skills as skill}
				<SkillsSlot {skill} />
			{/each}
		</div>
	</div>
</div>
