function binarySearch(arr, item) {
    let left = 0;///starts with first index
    let right = arr.length - 1;///starts with last index

    if (arr.includes(item)) return null;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let guess = arr[mid];
        if (guess === item) return mid;
        if (guess > item) {
            right = mid - 1;
        }
        if (guess < item) {
            left = mid + 1;
        }
    }
}

const test1 = [0, 1, 3, 5, 7, 9];
console.log(binarySearch(test1, 5));