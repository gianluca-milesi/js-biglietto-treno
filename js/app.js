//Variabili
let numKm = prompt("Quanti km hai percorso?"); //string
let eta = prompt("Quanti anni hai?"); //string
numKm = parseFloat(numKm); //number decimali
eta = parseInt(eta); //number interi
let ticketBasePrice = 0.21 * numKm; //number
let discount = 0;


//Sconti
if (eta < 18) {
    discount = ticketBasePrice * (20 / 100);
}
if (eta > 65) {
    discount = ticketBasePrice * (40 / 100);
}


//Output
let ticketFinalPrice = ticketBasePrice - discount;
const formattedPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
}).format(ticketFinalPrice);
// ticketFinalPrice = ticketFinalPrice.toFixed(2);
console.log(`Il prezzo finale da pagare è ${formattedPrice}`);
