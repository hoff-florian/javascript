// Verzweigungen

// Verzweigungen ermöglichen es, ein Programm unterschiedlich reagieren zu lassen.
// Wir nehmen mal an, dass wir von einem Benutzer eine Alterseingabe für unsere Schmuddelseite erhalten haben.

const age = 14

if (age >= 18) {
    console.log("Du bist volljährig und darfst die Seite besuchen.")
}
else if (age < 18) {
    console.log("Du darfst diese Seite nicht besuchen.")
}
else {
    console.log("Dein Alter konnte leider nicht verifiziert werden.")
}

// Wenn nur eine Anweisung innerhalb der Codeblöcke steht, können die Curly Braces weggelassen werden.
// Daraus ergibt sich:

if (age >= 18)
    console.log("Du bist volljährig und darfst die Seite besuchen.")
else if (age < 18)
    console.log("Du darfst diese Seite nicht besuchen.")
else
    console.log("Dein Alter konnte leider nicht verifiziert werden.")
