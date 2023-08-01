/* Write a JavaScript function to calculate the sum of all elements in a given array.*/

function calculateSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('All elements in the array must be numbers');
        }
        sum += arr[i];
    }

    return sum;
}

function main() {
    try {
        const testArray1 = [1, 2, 3, 4, 5];
        const sum1 = calculateSum(testArray1);
        console.log('Sum of testArray1:', sum1);

        const testArray2 = [10, 20, 30, 40];
        const sum2 = calculateSum(testArray2);
        console.log('Sum of testArray2:', sum2);

        const testArray3 = [];
        const sum3 = calculateSum(testArray3);
        console.log('Sum of testArray3:', sum3); // This should be 0 since the array is empty.

        const testArray4 = [2, 4, '6', 8];
        const sum4 = calculateSum(testArray4); // This should throw an error since '6' is not a number.
    } catch (error) {
        console.error(error.message);
    }
}

main();