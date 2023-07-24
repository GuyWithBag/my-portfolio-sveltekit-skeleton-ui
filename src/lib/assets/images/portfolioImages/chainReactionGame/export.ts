import ImageSource from "$lib/models/ImageSource"; 
import MainMenu from '$lib/assets/images/portfolioImages/chainReactionGame/main_menu.png';
import GamePlay from '$lib/assets/images/portfolioImages/chainReactionGame/gameplay.png'; 
import MapsMenu from '$lib/assets/images/portfolioImages/chainReactionGame/maps.png'; 
import MultiplePlayers from '$lib/assets/images/portfolioImages/chainReactionGame/multiple_players_1.png'; 
import Maps2 from '$lib/assets/images/portfolioImages/chainReactionGame/maps_2.png'; 
import MultiplePlayers2 from '$lib/assets/images/portfolioImages/chainReactionGame/multiple_players_2.png'; 
import Victory from '$lib/assets/images/portfolioImages/chainReactionGame/victory.png'; 

export const chainReactionImages: ImageSource[] = [
    new ImageSource(
        MainMenu, 
        "Main Menu"
    ), 
    new ImageSource(
        GamePlay, 
        "Gameplay"
    ), 
    new ImageSource(
        MapsMenu, 
        "Maps Menu"
    ), 
    new ImageSource(
        MultiplePlayers, 
        "Gameplay 2"
    ), 
    new ImageSource(
        Maps2, 
        "Maps Menu 2"
    ), 
    new ImageSource(
        MultiplePlayers2, 
        "Gameplay e"
    ), 
    new ImageSource(
        Victory, 
        "Victory Screen"
    ), 
]