let numbers = [5, -8, 35, -3, 6, 2];

let sum = 0;
for (let i = 0; i< numbers.length; i++){ // Go through each index in the array
  let item = numbers[i]; // Get the number at this index
  sum = sum + item; // Add the number to our running total
}
console.log("The sum is:", sum);

// Finding the sum of only positive numbers
sum = 0;
for (let i = 0; i< numbers.lentgh; i++){
  let item = numbers[i];
  if (item > 0){ // Positive means > 0
    sum = sum + itme; // Only if positive, add to running total
  }
}
console.log("The sum of only the positive numbers is:", sum);
