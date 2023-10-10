// Zeichenketten

// Für Zeichenketten / Texte gibt es in JavaScript den Datentyp String.
// Der nachfolgende Code zeigt, wie sie erstellt und verbunden werden (Konkatenation).

const a = "Hello World!"
console.log(a)                  // Hello World!

const b = "Hello "
const c = "Florian!"
console.log(b + c)              // Hello Florian!
console.log(`${b}${c}`)         // Alternative String Interpolation, Ausgabe: Hello Florian!
                                // Strings können in "", '' oder in `` (Backticks) geschrieben werden.
                                // Diese Variante der String Interpolation funktioniert nur mit Backticks.

// Strings können auch mit anderen Datentypen wie z. B. Zahlen konkateniert werden.

let age = 32.00000001   // lol
let name = "Florian"

console.log("Hallo " + name + ", du bist " + age + " Jahre alt.")   // Variante 1
console.log(`Hallo ${name}, du bist ${age} Jahre alt.`)             // Variante 2

// Das Ergebnis der Konkatenation kann auch als Variable gespeichert werden.

let message = `Hallo ${name}, du bist ${age} Jahre alt.`
console.log(message)
