/*Create a JavaScript program to calculate 
 the sum of numbers at even indexes in a given array. */

function sumOfNumbersAtEvenIndexes(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i += 2) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }

    return sum;
}

function main() {
    let inputArray = [2, 4, 6, 8, 10, 12, 14, 16, 18];
    let result = sumOfNumbersAtEvenIndexes(inputArray);
    console.log("Sum of numbers at even indexes:", result);
}
main();