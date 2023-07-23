export default class ImageSource {
    src: string; 
    alt: string = ""; 
    name: string = ""; 

    constructor(src: string, alt: string = "", name: string = "") {
        this.src = src; 
        this.alt = alt; 
        this.name = name; 
    }
}

