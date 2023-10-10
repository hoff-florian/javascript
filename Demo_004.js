// Logische Operatoren und Vergleiche

// Boolsche Ausdrücke sind Wahrheitswerte, die nur true oder false sein können.
// Bei Booleans handelt es sich neben Number und String um einen weiteren Datentyp.

const a = true
const b = true
const c = false
const d = false

// &&       ==> Logisches Und: Der Ausdruck wird nur true, wenn beide Werte daneben true sind.
// ||       ==> Logisches Oder: Der Ausdruck wird nur true, wenn mindestens einer der Werte daneben true ist.
// !        ==> Logisches Nicht: Der Ausdruck wird invertiert.

console.log( a && b )                       // true
console.log( a && c )                       // false

console.log( a || b )                       // true
console.log( a || c )                       // true

console.log( !a || c )                      // false
console.log( !(a && b) )                    // false

// <        ==> kleiner als
// >        ==> größer als
// <=       ==> kleiner gleich
// >=       ==> größer gleich
// ==       ==> gleich (in JavaScript genügt es, wenn der Wert gleich ist, Beispiel: 1 == "1" ergibt true)
// ===      ==> striktes gleich (hier müssen sowohl Wert als auch Datentyp stimmen, Beispiel: 1 === "1" ergibt false)
// !=       ==> ungleich (analog zu gleich)
// !==      ==> striktes ungleich (analog zu striktes gleich)

console.log( 20 > 5 && 20 < 50 )            // true
console.log( 10 === 2 || 10 == "10" )       // true
console.log( 20 >= 20 && 500 !== "500" )    // true
