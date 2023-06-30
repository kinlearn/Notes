"use strict";

// Problem statement:
// Input a year and find whether it is a leap year or not.

/* REMEMBER THIS LOGIC: 
A leap year is : 
    1. divisible by 4
    2. divisible by 100 is NOT leap unless divisible by 400
examples: 2000, 2016, 2020, 2024, 2028.. 
3000 is not a leap year.

*/

const isLeap = function (year) {
  if (year % 4 === 0) {
    if (y % 100 === 0) {
      if (y % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  } else {
    return false;
  }
};
