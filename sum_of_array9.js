/* Create a JavaScript function to calculate the sum of the largest and smallest elements in a given array. */

function sumOfLargestAndSmallest(arr) {
    if (arr.length === 0) {
        return 0; // Return 0 for an empty array
    }

    let smallest = arr[0];
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        } else if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return smallest + largest;
}

function main() {
    let inputArray = [4, 2, 8, 1, 5];
    let result = sumOfLargestAndSmallest(inputArray);
    console.log("Sum of largest and smallest elements:", result);
}
main();