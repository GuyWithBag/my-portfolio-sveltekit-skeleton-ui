import { writable } from 'svelte/store';

function createStore() {
    const { subscribe, set } = writable<number>(0);

    return {
        subscribe,
        set: (index: number) => set(index),
    };
}

export const skillsShowcaseTabs = createStore(); 