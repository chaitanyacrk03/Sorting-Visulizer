function selection_sort() {
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