<script lang="ts">

    import { jumps } from '../../models/jumps.ts'; 
    import JumpButton from '../JumpButton.svelte'; 
    import myFace from '$lib/assets/images/myFace.jpg'; 

</script>

<div class="snap-start bg-primary w-screen h-screen flex items-center justify-center">
    <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="flex flex-col w-96 gap-y-8">
            <h1 class="text-5xl font-bold">Loejee Miguel L. Dulaugon</h1>
            <p>I am a flexible programmer learner capable of software engineering, game development and web development. With tools such as Flutter, Godot Engine and Svelte</p>
            <div class="flex flex-row  gap-x-3">
                <button type="button" class="btn variant-filled">My Resume</button>
                {#each jumps as jump}
                    <JumpButton jumpTo={jump.id}>{jump.name}</JumpButton>
                {/each}
            </div>
        </div>
        <img class="object-cover h-96 w-96 rounded-full" src={myFace} alt="My Face"/>
    </div>
</div>

