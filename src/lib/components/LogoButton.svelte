<script lang="ts">
    export let logo: string | undefined; 
    export let alt: string | undefined; 
    export let label: string | undefined; 
    export let href: string = "https://github.com/GuyWithBag"; 
</script>

<a href={href} class="btn variant-filled h-6 text-[13px]"  target="_blank">
    <img 
        class="h-7 w-7 py-1 object-scale-down"
        src={logo} 
        alt={alt}
    />
    <span>{label}</span>
</a>
