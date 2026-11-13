let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

// 1. Display the entire list
console.log("Shopping list:", shoppingList);

// 2. First item
console.log("First item:", shoppingList[0]);

// 3. Last item
console.log("Last item:", shoppingList[shoppingList.length - 1]);

// 4. Add "Cooking Oil" to the end
shoppingList.push("Cooking Oil");
console.log("After adding Cooking Oil:", shoppingList);

// 5. Remove the first item
shoppingList.shift();
console.log("After removing first item:", shoppingList);

// 6. Change "Sugar" to "Tea Leaves"
const index = shoppingList.indexOf("Sugar");
shoppingList[index] = "Tea Leaves";
console.log("After replacing Sugar:", shoppingList);

// 7. Total number of items
console.log("Total items:", shoppingList.length);