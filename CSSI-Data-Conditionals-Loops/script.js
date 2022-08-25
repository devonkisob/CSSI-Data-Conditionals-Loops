let customerPayment =6;
let Cost = 7.5; 
let change = customerPayment - Cost;

if (customerPayment>Cost) {
  console.log("Your change is $"+ change + ". Thank you for shopping with us!");
} else if (customerPayment == Cost) {
  console.log("You have no change. Thank you for shopping with us!");
} else {
  console.log("You did not provide sufficient funds. We still need $"+ Math.abs(change) + " from you.")
}

let n1 = 0;
let n2 = 1;

for (let i = 1; i<40; i++){
  console.log(n1);
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}