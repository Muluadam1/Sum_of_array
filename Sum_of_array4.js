/* Write a JavaScript program to calculate the sum of even numbers in a given array. */

function calculateEvenSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

function main() {
    try {
        const testArray1 = [1, 2, 3, 4, 5];
        const sum1 = calculateEvenSum(testArray1);
        console.log('Sum of even numbers in testArray1:', sum1); // This should be 6 (2 + 4).

        const testArray2 = [-10, 20, -30, 41];
        const sum2 = calculateEvenSum(testArray2);
        console.log('Sum of even numbers in testArray2:', sum2); // This should be -20 (-10 + 20).

        const testArray3 = [0, 8, -5, 12];
        const sum3 = calculateEvenSum(testArray3);
        console.log('Sum of even numbers in testArray3:', sum3); // This should be 20 (0 + 8 + 12).

        const testArray4 = [1, 3, 5, 7];
        const sum4 = calculateEvenSum(testArray4);
        console.log('Sum of even numbers in testArray4:', sum4); // This should be 0 since there are no even numbers.

        const testArray5 = [2, 4, '6', 8];
        const sum5 = calculateEvenSum(testArray5); // This should throw an error since '6' is not a number.
    } catch (error) {
        console.error(error.message);
    }
}

main();