/* Implement a JavaScript program to calculate the sum of numbers in a two-dimensional array. */

function sumOfNumbersInTwoDArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === 'number') {
                sum += arr[i][j];
            }
        }
    }

    return sum;
}

function main() {
    let twoDArray = [
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9],
    ];

    let result = sumOfNumbersInTwoDArray(twoDArray);
    console.log("Sum of numbers in the two-dimensional array:", result);
}
main();