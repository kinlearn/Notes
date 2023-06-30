"use strict";

// Print first 100 prime numbers
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    if (i === 1) continue;
    console.log(i);
    count++;
  }
}

console.log(`There are ${count} prime numbers in first 100 natural numbers`);
