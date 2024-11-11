/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

"use strict";
console.clear();

const numbersList = document.getElementById("numbers-list");
const answerForm = document.getElementById("answers-form");
let message = document.getElementById("message");
const inputs = document.querySelectorAll("input");
const button = document.getElementById("button");

//Funzione per generare 5 numeri casuali senza ripetizioni e inserirli in un array
function randomNum() {
    //Utilizzo un Set per evitare i duplicati
    const numberListElement = new Set();
    while (numberListElement.size < 5) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
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

//Imposto il timer, dopo il quale spariscono i numeri e appaiono le caselle input 
const timer = setTimeout(function() {
    numbersList.classList.add("d-none");
    answerForm.classList.remove("d-none");
}, 10000);

    //Aggiungo un evento nel bottone per inviare i dati
    button.addEventListener('click', function(event){
    event.preventDefault();
    let correctNumbers = [];

    //Ciclo gli input
    for (let i = 0; i < inputs.length; i++) {
        const userAnswer = parseInt(inputs[i].value);
        if (randomNumbers.includes(userAnswer)) {
            correctNumbers.push(userAnswer);
    }
  //Condizione che stabilisce se e quanti numeri l'utente ha indovinato  
} if (correctNumbers.length > 0) {
        message.textContent = `Hai indovinato i numeri: ${correctNumbers.join(", ")}.`;
        message.classList.remove("text-danger");
        message.classList.add("text-success");
    } else {
        message.textContent = "Non hai indovinato nessun numero.";
    }
})