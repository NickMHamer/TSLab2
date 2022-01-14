import { Greeter } from './greeter'
export class JavaScriptGreeter extends Greeter{
    greet(name: string): any {
        return console.log(`${this.greeting}, ${name}`)
    }
}