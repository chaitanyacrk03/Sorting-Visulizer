const array = document.querySelector("#array");
const len = document.querySelector("#len");
const speed = document.querySelector("#speed");
let inputArr = [];
val = 0;
const a = [];
let divs = [];
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
const btn = document.querySelector("#heyy");
let time = 0;
let delay = 10;
speed.addEventListener('input', function () {
    delay = 5000 / (speed.value * 10);
})

btn.addEventListener('click', function () {
    let n = divs.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        setTimeout(() => {
            divs[i].style.backgroundColor = "red";
        }, time += delay);
        for (let j = i + 1; j < n; j++) {
            setTimeout(() => {
                divs[j].style.backgroundColor = "yellow";
            }, time += delay / 2);
            if (inputArr[j] < inputArr[min]) {
                if (min != i) {
                    setTimeout(() => {
                        divs[min].style.backgroundColor = "blue";
                    }, time += delay / 2);
                }
                min = j;
                setTimeout(() => {
                    console.log(min);
                    divs[j].style.backgroundColor = "red";

                }, time += delay / 2);
            }
            setTimeout(() => {
                divs[j].style.backgroundColor = "blue";
            }, time += delay / 2);


        }
        setTimeout(() => {
            divs[min].style.backgroundColor = "red";
        }, time += delay / 2);
        if (min != i) {
            // Swapping the elements
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
            setTimeout(() => {
                let temp = divs[i].style.height;
                divs[i].style.height = divs[min].style.height;
                divs[min].style.height = temp;
            }, time += delay / 2);
        }
        setTimeout(() => {
            divs[min].style.backgroundColor = "blue";
            divs[i].style.backgroundColor = "green";
        }, time += delay);

    }
}
)
