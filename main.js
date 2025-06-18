// Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande
const AccountNumber = (n) => {
    if (
        isNaN(n) ||
        n <= 0 ||
        n > 9999 ||
        !Number.isInteger(n)
    ) {
        throw new Error(`The number must be a positive integer up to 9999`);
    }
    return n.toString().length;
};

let input = prompt("Choose the number you want to count");
let number = parseInt(input, 10);

if (isNaN(number)) {
    alert("You must enter a valid number!");
} else {
    try {
        let length = AccountNumber(number);
        alert(`The number has ${length} digit(s).`);
    } catch (error) {
        alert(error.message);
    }
}
