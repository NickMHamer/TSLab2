import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./JSGreeter";
import { LoudGreeter } from "./Loudgreeter";
import { HtmlGreeter } from "./HTMLGreeter";

let sayHello = new Greeter('Greetings')
console.log(sayHello.greet('nick'))

let sayHelloLouder = new LoudGreeter('Greetings')
sayHelloLouder.addVolume()
sayHelloLouder.addVolume()
console.log(sayHelloLouder.greet('nick'))

let sayHelloJS = new JavaScriptGreeter('Greetings')
sayHelloJS.greet('nickJS')

let sayHelloHTML = new HtmlGreeter('Greetings')
console.log(sayHelloHTML.greet('nick'))

let sayHelloHTML2 = new HtmlGreeter('Greetings', ['<div>','</div>'])
console.log(sayHelloHTML2.greet('nick'))