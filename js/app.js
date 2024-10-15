//Variabili
let numKm = prompt("Quanti km hai percorso?"); //string
numKm = parseFloat(numKm); //number decimali
let ticketBasePrice = 0.21 * numKm; // number
let discount = 0;

if (isNaN(numKm) || numKm < 0) {
    alert("Per favore, inserisci un numero valido per i km percorsi.");
    location.reload(); // ricarica la pagina
} else {

    let eta;

    while (true) {
        eta = prompt("Quanti anni hai?"); // string
        eta = parseInt(eta);
        if (isNaN(eta) || eta < 0 || !Number.isInteger(eta)) {
            alert("Per favore, inserisci un numero intero e valido per l'età.");
        } else {
            break;
        }
    }

    // Sconti
    if (eta < 18) {
        discount = ticketBasePrice * (20 / 100);
    }
    if (eta > 65) {
        discount = ticketBasePrice * (40 / 100);
    }

}

//Output
let ticketFinalPrice = ticketBasePrice - discount;
const formattedPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
}).format(ticketFinalPrice);
// ticketFinalPrice = ticketFinalPrice.toFixed(2);
console.log(`Il prezzo finale da pagare è ${formattedPrice}`);




// Versione compatta
// const priceKm = 0.21, km = parseInt(prompt("Inserisci i km")), eta = parseInt(prompt("Inserisci la tua età"));
// const discount = (km * priceKm * (eta < 18 ? 20 : eta >= 65 ? 40 : 0)) / 100;
// console.log((km * priceKm - discount).toFixed(2));