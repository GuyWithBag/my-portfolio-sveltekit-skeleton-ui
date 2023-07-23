<script lang="ts">
    export let imagesAtRight: boolean = true; 
</script>

<div class="grid lg:grid-cols-2 gap-3 justify-items-center overflow-hidden" style="" >
    {#if imagesAtRight == false}
        <slot name="images" /> 
    {/if}
    <div class="grid grid-rows-2 gap-2">
        <slot name="bio" />
        <div class="grid lg:grid-cols-2 gap-2">
            <slot name="actions" />
        </div>
    </div>
    {#if imagesAtRight == true}
        <slot name="images" /> 
    {/if}
</div>

