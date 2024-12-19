let names = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise)").split(",").map(name => name.trim());
let ages = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9)").split(",").map(age => parseInt(age.trim()));

// Create a multi-dimensional array
let multiDimensionalArray = [names, ages];

// Restructure the array
let restructuredArray = multiDimensionalArray[0].map((name, index) => [name, multiDimensionalArray[1][index]]);

// Log the restructured array to the console
restructuredArray.forEach(item => console.log(item));
