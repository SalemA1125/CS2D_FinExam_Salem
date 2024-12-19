const word1 = prompt("Enter the first word (e.g., RECLEAR):");
const word2 = prompt("Enter the second word (e.g., RECORDER):");

//functiontion to reverse the string
const reverseString = (str) => str.split('').reverse().join('');

//Reverse the first and second word
const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);

//Display the original first and second word then reverse it then check if the first and second word is palindrome
console.log(`Original String 1: ${word1}`);
console.log(`Reversed String 1: ${reversedWord1}`);
console.log(`Is "${word1}" a palindrome? ${word1 === reversedWord1}`);

console.log(`Original String 2: ${word2}`);
console.log(`Reversed String 2: ${reversedWord2}`);
console.log(`Is "${word2}" a palindrome? ${word2 === reversedWord2}`);
