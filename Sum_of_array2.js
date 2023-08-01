/* Implement a JavaScript program to calculate the sum of positive numbers in a given array.*/

function calculatePositiveSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}

function main() {
    try {
        const testArray1 = [1, 2, 3, 4, 5];
        const sum1 = calculatePositiveSum(testArray1);
        console.log('Sum of positive numbers in testArray1:', sum1);

        const testArray2 = [-10, 20, -30, 40];
        const sum2 = calculatePositiveSum(testArray2);
        console.log('Sum of positive numbers in testArray2:', sum2);

        const testArray3 = [0, 8, -5, 12];
        const sum3 = calculatePositiveSum(testArray3);
        console.log('Sum of positive numbers in testArray3:', sum3); // This should be 20 (8 + 12).

        const testArray4 = [2, 4, '6', 8];
        const sum4 = calculatePositiveSum(testArray4); // This should throw an error since '6' is not a number.
    } catch (error) {
        console.error(error.message);
    }
}

main();