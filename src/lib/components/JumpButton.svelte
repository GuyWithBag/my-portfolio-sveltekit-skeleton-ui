
<script lang="ts">
    export let style: string = "btn variant-filled text-[13px] lg:text-[16px]"; 
    export let jumpTo: string; 

    function onClick() {
        if (jumpTo == null) {
            return; 
        }
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

