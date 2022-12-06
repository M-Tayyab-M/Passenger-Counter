let counterEl = document.getElementById("counter");

let incrementEl = 0;

function increment(){
    incrementEl += 1;
    counterEl.textContent = incrementEl;
}
let previous = document.getElementById("previous-sl");

function save(){
    let saveEl = incrementEl + " - ";
    previous.textContent += saveEl;
    incrementEl = 0;
    counterEl.textContent = 0;
}