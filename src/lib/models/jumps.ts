class Jump {
    id: string; 
    name: string; 

    constructor(id: string, name: string) {
        this.id = id; 
        this.name = name; 
    }
}

export const jumps: Jump[] = [
    new Jump("works-container", "My Works"), 
    new Jump("about", "About Me"), 
    new Jump("contacts", "Contacts"), 
]