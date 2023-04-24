import { time } from "./methodDecorator.js"; 
import { message } from "./multiples.js";

export class City {

    constructor(public name: string, public population: number) {}

    @message("First Decorator")
    @message("Second Decorator")
    getSummary(): string {
        return `Name: ${this.name}, Population: ${this.population}`;
    }
}
