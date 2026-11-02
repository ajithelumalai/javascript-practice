
// Shopping Bill Calculator

console.log("===== SHOPPING BILL =====");

let product1 = "Shirt";
let price1 = 800;
let quantity1 = 2;

let product2 = "Jeans";
let price2 = 1200;
let quantity2 = 1;

let product3 = "Shoes";
let price3 = 1500;
let quantity3 = 1;

// Calculate product amounts
let amount1 = price1 * quantity1;
let amount2 = price2 * quantity2;
let amount3 = price3 * quantity3;

// Calculate total
let subtotal = amount1 + amount2 + amount3;

// Discount calculation
let discount = subtotal >= 3000 ? subtotal * 0.10 : 0;

// Final amount
let finalAmount = subtotal - discount;

// GST calculation (5%)
let gst = finalAmount * 0.05;

let grandTotal = finalAmount + gst;

// Display bill
console.log("Product 1:", product1);
console.log("Amount:", amount1);

console.log("Product 2:", product2);
console.log("Amount:", amount2);

console.log("Product 3:", product3);
console.log("Amount:", amount3);

console.log("--------------------------");

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("GST:", gst);
console.log("Grand Total:", grandTotal);

console.log("--------------------------");

console.log(
    grandTotal >= 3000
    ? "Thank you for shopping!"
    : "Add more products for a better offer!"
);
