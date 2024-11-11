/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

/*
-creare un array vuoto per i numeri da indovinare [numberToGuess = []]
-generare un numero random tra 1 e 100 5 volte e creare il li da appendere alla ul e appenderlo

userNumber[]

ipotesi counter

numeriIndovinati[]


premdiamo dall'html
ul#numbers-list --> la lista dove devo mettere i li con i numeri

form#answer-form --> form con evento submit o bottone o con evento click

p#message --> per stampare il messaggio finale

const inputs = document.querySelectorAll(input);
for(let i = 0; i < inputs.lenght; i++) {
    userNumber.push(inputs[i].value);
}

*/
"use strict";
console.clear();

const numbersList = document.getElementById("numbers-list");

//Funzione per generare 5 numeri casuali senza ripetizioni e inserirli in un array
function randomNum() {
    //Utilizzo un Set per evitare i duplicati
    const numberListElement = new Set();
    while (numberListElement.size < 5) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numberListElement.add(randomNumber);
    }
    return Array.from(numberListElement);
}
const randomNumbers = randomNum();

let listItems = "";
//Ciclo ogni elemento di randomNumbers per inserirli uno ad uno all'interno di un li
for (let i = 0; i < randomNumbers.length; i++) {
    listItems += `<li>${randomNumbers[i]}</li> `;
}

numbersList.innerHTML = listItems;
console.log(listItems)
