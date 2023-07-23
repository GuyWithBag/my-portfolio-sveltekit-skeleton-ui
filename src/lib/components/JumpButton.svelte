
<script lang="ts">
    export let style: string = "btn variant-filled"; 
    export let jumpTo: string; 

    function onClick() {
        document.getElementById(jumpTo)!.scrollIntoView({
            behavior: 'smooth',
        });
    }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a>
    <button type="button" class={style} on:click={onClick}>
        <slot />
    </button>
</a>

