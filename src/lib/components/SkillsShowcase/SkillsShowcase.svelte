<script lang="ts">
	import type { SkillsTabModel } from '$lib/models/skillsTabModel';
	import { get } from 'svelte/store';
	import SkillsSlot from './SkillsSlot.svelte';
	import SkillsTab from './SkillsTab.svelte';

	function getAllSkills(): SkillsTabModel {
		const skills: string[] = [];
		tabs.forEach((tab: SkillsTabModel) => {
			tab.skills.forEach((skill: string) => {
				skills.push(skill);
			});
		});
		return {
			name: 'All',
			skills: skills
		};
	}

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
			skills: ['Javascript', 'TypeScript', 'Python', 'Dart', 'GDScript', 'CSharp', 'Java', 'SQL']
		}
	];

	function getTab(index: number): SkillsTabModel {
		return (
			tabs[index] ?? {
				name: '',
				skills: ['']
			}
		);
	}

	$: currentTabIndex = 0;
	$: currentTab = getAllSkills();
</script>

<!-- Flutter, React, Svelte, Godot Engine -->
<!-- Dart, Javascript, Typescript, MySQL, C#, Python, GDScript, MySQL -->
<!-- Zustand, Tailwind, Firebase, Admob, HiveDB, Git -->

<div>
	<div class="flex flex-col gap-3 justify-center items-center p-5">
		<div class="flex flex-row gap-3">
			<SkillsTab
				tab={getAllSkills()}
				onClick={() => {
					currentTab = getAllSkills();
				}}
			/>
			{#each tabs as tab}
				<SkillsTab
					{tab}
					onClick={() => {
						currentTabIndex = tabs.indexOf(tab);
						currentTab = getTab(currentTabIndex);
					}}
				/>
			{/each}
		</div>
		<div class="flex justify-center items-center w-[45%] max-sm:w-[95%]">
			<div
				class="grid grid-cols-[repeat(auto-fit,7rem)] max-sm:grid-cols-[repeat(auto-fit,5rem)] w-[100%] p-3 gap-4 bg-slate-900"
			>
				{#each currentTab.skills as skill}
					<SkillsSlot {skill} />
				{/each}
			</div>
		</div>
	</div>
</div>
