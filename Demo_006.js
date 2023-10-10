// Switch Case

// Manchmal möchte man eine Variable auf mehrere Cases überprüfen.
// Dann bietet sich das Switch Case-Konstrukt an.
// Für dieses Beispiel instanziiere ich ein Datums-Objekt, das das heutige Datum repräsentiert.
// Von diesem Objekt lese ich den aktuellen Monat aus.
// Je nachdem welcher Monat vorliegt, reagiert das Programm anders.

const date = new Date()
const month = date.getMonth()       // Da in der Informatik ab 0 hochgezählt wird, entspricht 0 dem Januar und 11 dem Dezember.

switch (month) {
    case 11:
        console.log("Wir haben Dezember!")
        break
    case 10:
        console.log("Wir haben November!")
        break
    case 9:
        console.log("Wir haben Oktober!")
        break
    case 8:
        console.log("Wir haben September!")
        break
    case 7:
        console.log("Wir haben August!")
        break
    case 6:
        console.log("Wir haben Juli!")
        break
    case 5:
        console.log("Wir haben Juni!")
        break
    case 4:
        console.log("Wir haben Mai!")
        break
    case 3:
        console.log("Wir haben April!")
        break
    case 2:
        console.log("Wir haben März!")
        break
    case 1:
        console.log("Wir haben Februar!")
        break
    case 0:
        console.log("Wir haben Januar!")
        break
    default:    // In allen anderen Fällen gilt default.
        console.log("Monat konnte nicht ausgewertet werden.")
}

// Aufgabe an dich!
// Was geschieht, wenn man ein break weglässt und warum?
