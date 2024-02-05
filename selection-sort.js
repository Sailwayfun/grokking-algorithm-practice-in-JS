function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr) {
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        const smallestIndex = findSmallestIndex(arr)
        const smallest = arr[smallestIndex];
        sortedArr.push(smallest);
        arr.splice(smallestIndex, 1);
    }
    return sortedArr;
}

const t0 = performance.now();
const sortedArr = selectionSort([1, -5, 33, -99, 345, 72, 6, 88, -345, 222, 112, 345, 9.7, 87, 34, 23]);
const t1 = performance.now();
console.log(`The selection sort took ${t1 - t0} milliseconds`);
console.log(sortedArr);

///選擇排序的時間複雜度為O的n平方