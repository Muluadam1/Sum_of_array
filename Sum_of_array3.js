/* Create a JavaScript function to calculate the sum of negative numbers in a given array. */

function calculateNegativeSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        if (arr[i] < 0) {
            sum += arr[i];
        }
    }

    return sum;
}

function main() {
    try {
        const testArray1 = [1, -2, 3, -4, 5];
        const sum1 = calculateNegativeSum(testArray1);
        console.log('Sum of negative numbers in testArray1:', sum1); // This should be -6 (-2 + -4).

        const testArray2 = [-10, 20, -30, 40];
        const sum2 = calculateNegativeSum(testArray2);
        console.log('Sum of negative numbers in testArray2:', sum2); // This should be -40 (-10 + -30).

        const testArray3 = [0, -8, 5, -12];
        const sum3 = calculateNegativeSum(testArray3);
        console.log('Sum of negative numbers in testArray3:', sum3); // This should be -20 (-8 + -12).

        const testArray4 = [2, 4, '6', 8];
        const sum4 = calculateNegativeSum(testArray4); // This should throw an error since '6' is not a number.
    } catch (error) {
        console.error(error.message);
    }
}

main();