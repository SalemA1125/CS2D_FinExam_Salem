// Initialize an empty array to hold grocery items
let groceryStack = [];

// Check if the stack is empty and return the current size
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null; // Return null if the stack is empty
    } else {
        console.log("Current top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1]; // Return the top item
    }
}

// Add an item to the stack
function push(item) {
    groceryStack.push(item); // Add the item to the end of the array
    console.log(`Added: ${item}`);
    console.log("Current stack:", groceryStack); // Print the current stack
    peek(); // Call peek to show the top item
}

// Function to remove the last added item from the stack
function pop() {
    if (peek() !== null) { // Check if the stack is not empty
        const removedItem = groceryStack.pop(); // Remove the last item
        console.log(`Removed: ${removedItem}`);
        console.log("Current stack:", groceryStack); // Print the current stack
        peek(); // Call peek to show the new top item
    }
}

// Main function to accept grocery items from the user
function manageGroceryStack() {
    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter a grocery item:"); // Prompt user for grocery item
        push(item); // Add the item to the stack
    }

    pop(); // Remove the last added item
}

// Start managing the grocery stack
manageGroceryStack();
