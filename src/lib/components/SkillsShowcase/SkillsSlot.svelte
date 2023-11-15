<script lang="ts">
	import { logos } from "$lib/assets/images/logos/export";

    export let skill: string

</script>

<div class='flex justify-center items-center'>
    {#if logos.has(skill)}
        <img 
            class="p-2 object-contain"
            alt={logos.get(skill)?.alt} 
            src={logos.get(skill)?.src} 
        />
    {/if}  
</div>

