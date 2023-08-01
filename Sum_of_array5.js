/* Implement a JavaScript function to calculate the sum of odd numbers in a given array. */

function calculateOddSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }

    return sum;
}

function main() {
    try {
        const testArray1 = [1, 2, 3, 4, 5];
        const sum1 = calculateOddSum(testArray1);
        console.log('Sum of odd numbers in testArray1:', sum1); // This should be 9 (1 + 3 + 5).

        const testArray2 = [-10, 21, -30, 41];
        const sum2 = calculateOddSum(testArray2);
        console.log('Sum of odd numbers in testArray2:', sum2); // This should be 62 (21 + 41).

        const testArray3 = [0, 8, -5, 12];
        const sum3 = calculateOddSum(testArray3);
        console.log('Sum of odd numbers in testArray3:', sum3); // This should be -5 (-5).

        const testArray4 = [2, 4, 6, 8];
        const sum4 = calculateOddSum(testArray4);
        console.log('Sum of odd numbers in testArray4:', sum4); // This should be 0 since there are no odd numbers.

        const testArray5 = [1, 3, '5', 7];
        const sum5 = calculateOddSum(testArray5); // This should throw an error since '5' is not a number.
    } catch (error) {
        console.error(error.message);
    }
}

main();