let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
let saveEl= document.getElementById("save-el")

function save() {
    saveEl.textContent+=count+" - ";
    count=0;
    countEl.textContent=count;
}
function reset(){
    saveEl.textContent="Previous entries:"
    count=0;
    countEl.textContent=count;
}