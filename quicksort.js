function partition(arr, start, end) {
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    setTimeout(() => {
        divs[end].style.backgroundColor = "red";
    }, time += delay);
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        let helper = pivotIndex;
        setTimeout(() => {
            divs[i].style.backgroundColor = "red";
        }, time += delay);
        if (arr[i] < pivotValue) {
            setTimeout(() => {
                divs[end].style.backgroundColor = "yellow";
            }, time += delay);
            setTimeout(() => {
                divs[end].style.backgroundColor = "red";
            }, time += delay);
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            setTimeout(() => {
                let tmp = divs[helper].style.height;
                divs[helper].style.height = divs[i].style.height;
                divs[i].style.height = tmp;
            }, time += delay);
            setTimeout(() => {
                divs[i].style.backgroundColor = "blue";
            }, time += delay);

            // Moving to next element
            pivotIndex++;
        }
        else {
            setTimeout(() => {
                divs[i].style.backgroundColor = "yellow";
            }, time += delay);
            setTimeout(() => {
                divs[i].style.backgroundColor = "blue";
            }, time += delay);
        }
    }
    setTimeout(() => {
        if (divs[end].style.backgroundColor != "green") {
            divs[end].style.backgroundColor = "blue";
        }
    }, time += delay);
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    setTimeout(() => {
        let temp = divs[pivotIndex].style.height;
        divs[pivotIndex].style.height = divs[end].style.height;
        divs[end].style.height = temp;
    }, time += delay);
    setTimeout(() => {
        divs[pivotIndex].style.backgroundColor = "green";
    }, time += delay);
    setTimeout(() => {
        for (let k = start; k <= end; k++) {
            if (end - start + 1 != divs.length) {
                divs[k].style.backgroundColor = "green";
            }
        }
    }, time += delay);

    return pivotIndex;
};
function quicksort(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }

    // Returns pivotIndex
    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays
    quicksort(arr, start, index - 1);
    quicksort(arr, index + 1, end);
}