import { writable } from 'svelte/store';

function createStore() {
    const { subscribe, set } = writable<number>(0);

    return {
        subscribe, 
        set: (value: number) => set(value), 
    };
}

export const appShellController = createStore(); 