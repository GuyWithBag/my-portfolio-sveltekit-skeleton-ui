
<script lang="ts">
    import { scrollTo } from 'svelte-scrolling'

    export let jumpTo: string; 
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:scrollTo={{ ref: jumpTo, duration: 1000 }}>
    <button type="button" class="btn variant-filled">
        <slot />
    </button>
</a>

