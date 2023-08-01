/* Write a JavaScript program to calculate the sum of elements in a given array excluding any duplicates. */
function sumWithoutDuplicates(arr) {
    let uniqueElements = new Set(arr);
    let sum = 0;

    uniqueElements.forEach((num) => {
        sum += num;
    });

    return sum;
}

function main() {
    let inputArray = [1, 2, 2, 3, 4, 4, 5];
    let result = sumWithoutDuplicates(inputArray);
    console.log("Sum of elements without duplicates:", result);
}
main();