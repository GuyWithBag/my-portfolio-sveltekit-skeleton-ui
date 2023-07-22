import { writable } from 'svelte/store';


enum PortfolioItems {
    MUSIC_PLAYER, 
    MORSE_CODE_TORCH, 
    CHAIN_REACTION_ATOM, 
}

function createStore () {
    const { subscribe, set } = writable<PortfolioItems>(PortfolioItems.MUSIC_PLAYER); 

    return {
        subscribe, 
        set: (item: PortfolioItems) => set(item), 
    };

}

export const currentPortfolioItem = createStore(); 