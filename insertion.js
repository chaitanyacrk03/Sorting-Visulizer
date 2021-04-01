function insertionsort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = inputArr[i];
        setTimeout(() => {
            divs[i].style.backgroundColor = "red";
        }, time += delay);
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            let helper = j;
            setTimeout(() => {
                divs[helper].style.backgroundColor = "yellow";
            }, time += delay);
            setTimeout(() => {
                divs[helper + 1].style.height = divs[helper].style.height;
            }, time += delay);
            j--;
        }
        setTimeout(() => {
            divs[j + 1].style.height = current;
        }, time += delay);
        setTimeout(() => {
            for (let k = j + 1; k < i; k++) {
                divs[k].style.backgroundColor = "green";
            }
        }, time += delay);
        setTimeout(() => {
            divs[i].style.backgroundColor = "green";
        }, time += delay);
        inputArr[j + 1] = current;
    }
}