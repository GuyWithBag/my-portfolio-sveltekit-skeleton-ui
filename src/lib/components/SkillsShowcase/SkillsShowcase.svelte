<script lang="ts">

	import type { SkillsTabModel } from "$lib/models/skillsTabModel";
	import SkillsSlot from "./SkillsSlot.svelte";
	import SkillsTab from "./SkillsTab.svelte";

    let tabs: SkillsTabModel[] = [
        {
            name: 'Frameworks', 
            skills: [
                'Flutter', 
                'React', 
                'Godot', 
                'Svelte'
            ]
        }, 
        {
            name: 'Technologies', 
            skills: [
                'Zustand', 
                'Tailwind', 
                'Firebase', 
                'GoogleAdMob', 
                'HiveDB', 
                'Git'
            ]
        }, 
        {
            name: 'Languages', 
            skills: [

            ]
        }, 
    ]

    let currentTabIndex: number = 0
    let currentTab: SkillsTabModel = tabs[currentTabIndex]!

</script>

<!-- Flutter, React, Svelte, Godot Engine -->
<!-- Dart, Javascript, Typescript, MySQL, C#, Python, GDScript, MySQL -->
<!-- Zustand, Tailwind, Firebase, Admob, HiveDB, Git -->

<div>
    <div class='flex flex-col gap-3'>
        <div class='flex flex-row gap-3'>
            {#each tabs as tab}
            <!-- ToDO: Add tabs functionality -->
                <SkillsTab tab={tab} onClick={() => {}}/>
            {/each}
        </div>

        <div class='grid grid-cols-[repeat(auto-fit,130px)] gap-4'>
            {#each currentTab.skills as skill}
                <SkillsSlot skill={skill} />
            {/each}
        </div>
    </div>
</div>