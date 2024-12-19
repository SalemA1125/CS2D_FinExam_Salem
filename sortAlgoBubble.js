// Create an array with the given numbers
let numbers = [42, 25, 12, 63, 48, 10, 16, 5, 30, 78];

function bubbleSort(arr) {
  const n = arr.length; // Get the length of the array
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare two elements
      if (arr[j] > arr[j + 1]) {
        // Swap if the left element is bigger
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // Return the sorted array
}

// Sorting the array and log the result
let sortedNumbers = bubbleSort(numbers);
console.log("Sorted Array:", sortedNumbers);
