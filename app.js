



const array = document.querySelector("#array");
const len = document.querySelector("#len");
const speed = document.querySelector("#speed");
const reset = document.querySelector("#reset");
const btn = document.querySelector("#heyy");
const bubbleSort = document.querySelector("#bubble");
const quickSort = document.querySelector("#quick");
const insertionSort = document.querySelector("#insert");
const sortbuttons = document.querySelectorAll(".sort");
let inputArr = [];
val = 0;
const a = [];
let divs = [];
reset.addEventListener('click', () => {
    array.innerText = "";
    inputArr = [];
    enable();
    for (let i = 0; i < len.value; i++) {
        ele = document.createElement("div");
        val = `${Math.random() * 500 + 20}`;
        ele.style.width = "20px";
        ele.style.height = `${val}px`;
        ele.style.margin = "0.5px";

        inputArr.push(parseInt(val));
        ele.innerText = "";
        ele.style.backgroundColor = "blue";
        array.appendChild(ele);
        time = 0;
    }
    divs = document.querySelectorAll("#array div");
})
len.addEventListener('input', function () {
    array.innerText = "";
    inputArr = [];
    for (let i = 0; i < len.value; i++) {
        ele = document.createElement("div");
        val = `${Math.random() * 500 + 20}`;
        ele.style.width = "20px";
        ele.style.height = `${val}px`;
        ele.style.margin = "0.5px";

        inputArr.push(parseInt(val));
        ele.innerText = "";
        ele.style.backgroundColor = "blue";
        array.appendChild(ele);
    }
    divs = document.querySelectorAll("#array div");
})
let time = 0;
let delay = 10;
function disable() {
    for (let button of sortbuttons) {
        button.disabled = true;
    }
}
function enable() {
    for (let button of sortbuttons) {
        button.disabled = false;
    }
}
speed.addEventListener('input', function () {
    delay = 5000 / (speed.value * 10);
})

btn.addEventListener('click', function () {
    disable();
    selection_sort();
});
bubbleSort.addEventListener('click', function () {
    disable();
    bubble();
});
quickSort.addEventListener('click', function () {
    disable();
    quicksort(inputArr, 0, divs.length - 1);
});
insertionSort.addEventListener('click', function () {
    disable();
    insertionsort(inputArr);
});

