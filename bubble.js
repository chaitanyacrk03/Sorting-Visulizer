
function bubble() {
    n = inputArr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            setTimeout(() => {
                divs[j].style.backgroundColor = "red";
            }, time += delay);
            setTimeout(() => {
                divs[j + 1].style.backgroundColor = "red";
            }, time += delay);
            if (inputArr[j] > inputArr[j + 1]) {
                setTimeout(() => {
                    divs[j].style.backgroundColor = "yellow";
                }, time += delay);
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
                setTimeout(() => {
                    let temp = divs[j].style.height;
                    divs[j].style.height = divs[j + 1].style.height;
                    divs[j + 1].style.height = temp;
                }, time += delay / 2);
            }
            else {
                setTimeout(() => {
                    divs[j + 1].style.backgroundColor = "yellow";
                }, time += delay);
            }
            setTimeout(() => {
                divs[j].style.backgroundColor = "blue";
            }, time += delay);
            setTimeout(() => {
                divs[j + 1].style.backgroundColor = "red";
            }, time += delay);
        }
        setTimeout(() => {
            divs[n - i - 1].style.backgroundColor = "green";
        }, time += delay);
    }
}

console.log(inputArr);
bubble([3, 5, 7, 2, 1]);
console.log(inputArr);