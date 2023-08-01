/* Write a JavaScript function to calculate the sum of numbers at odd indexes in a given array. */

function sumOfNumbersAtOddIndexes(arr) {
    let sum = 0;

    for (let i = 1; i < arr.length; i += 2) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    return sum;
}

function main() {
    let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = sumOfNumbersAtOddIndexes(inputArray);
    console.log("Sum of numbers at odd indexes:", result);
}
main();