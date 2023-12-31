import ImageSource from "$lib/models/ImageSource";
import HomePage from '$lib/assets/images/portfolioImages/morseCodeTorch/home_page.png'; 
import MorseCodeWrite from '$lib/assets/images/portfolioImages/morseCodeTorch/morse_code_write.png'; 
import SaveHistory from '$lib/assets/images/portfolioImages/morseCodeTorch/save_history.png'; 
import Save from '$lib/assets/images/portfolioImages/morseCodeTorch/save.png'; 

export const morseCodeTorchImages: ImageSource[] = [
    new ImageSource(
        HomePage, 
        "Home Page"
    ), 
    new ImageSource(
        MorseCodeWrite, 
        "Writing Morse Code"
    ), 
    new ImageSource(
        SaveHistory, 
        "Save History Page"
    ), 
    new ImageSource(
        Save, 
        "Saving"
    ), 
]

