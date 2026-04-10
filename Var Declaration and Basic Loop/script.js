const productPrice = 499;    
const taxRate = 0.18;        
let quantity = 5;           
let subtotal = productPrice * quantity;
console.log("Processing Order...");
console.log("Subtotal: " + subtotal);
if (quantity > 3) {
    console.log("Applying bulk discount log:");
    for (let i = 1; i <= quantity; i++) {
        console.log("Item " + i + " verified for discount.");
    }
}
const totalTax = subtotal * taxRate;
const grandTotal = subtotal + totalTax;
console.log("Total Tax: " + totalTax);
console.log("Grand Total: " + grandTotal);