import { writable } from 'svelte/store';

function createStore() {
    const { subscribe, set } = writable<boolean>(false);

    return {
        subscribe, 
        show: () => set(true), 
        hide: () => set(false), 
    };
}

export const headerVisible = createStore(); 