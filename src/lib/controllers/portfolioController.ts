import { writable } from 'svelte/store';


export enum PortfolioItems {
    MUSIC_PLAYER, 
    MORSE_CODE_TORCH, 
    CHAIN_REACTION_ATOM, 
    TO_DO_APP, 
}

export enum ImagesDirection {
    TOP, 
    LEFT, 
    RIGHT
}

export let previousPortfolioIndex: number; 

function createStore () {
    const { subscribe, set, update } = writable(0); 

    let itemsLength: number = Object.keys(PortfolioItems).length / 2; 

    return {
        subscribe, 
        next: () => update(
                (n) => {
                    previousPortfolioIndex = n; 
                    if ((n + 1) >= itemsLength) {
                        return 0; 
                    }
                    return n + 1; 
                }
            ), 
        back: () => update(
            (n) => {
                previousPortfolioIndex = n; 
                if ((n - 1) < 0) {
                    return itemsLength - 1; 
                }
                return n - 1; 
            }
            ), 
        set: (index: number) => set(index), 
    };
}

export const currentPortfolioIndex = createStore(); 