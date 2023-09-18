<script lang="ts">
	import { logos } from "$lib/assets/images/logos/export";
    export let href: string
    
</script>

<a class="btn variant-filled" href={href} target="_blank">
    <img 
        class="h-5"
        src={logos.get("GithubMark")?.src} 
        alt={logos.get("GithubMark")?.alt} 
    />
    <span>Github</span>
</a>
