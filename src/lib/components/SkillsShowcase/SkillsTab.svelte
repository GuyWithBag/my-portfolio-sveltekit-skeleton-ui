<script lang="ts">
	import type { SkillsTabModel } from "$lib/models/skillsTabModel";

    export let tab: SkillsTabModel
    export let onClick: any

    let { name } = tab

</script>

<button 
    class="btn variant-filled"
    on:click={onClick}
>
    {name}
</button>