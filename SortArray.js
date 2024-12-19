// Prompt user for numbers and names
const numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);
const names = prompt("Enter names separated by commas:").split(",");

// Merge both arrays into a single array
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically
const sortedNames = names.sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
