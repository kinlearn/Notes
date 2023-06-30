# Chapter 3 - Problems

### 1. Input a number and print whether it is prime or not

### Solution:

**Context**: A number is said to be a prime number if it is evenly divisible by only itself and 1. <br>
e.g. 2, 3, 5, 7, 11, 13, 17, 19... etc.

**LOGIC** <br>
We have to check by dividing every number from 2,3,4,...n-1 with n and see if it's modulo is 0. If it is, then not a prime number. If we check and no number could get 0 after dividing, it is a prime number.

- To produce the range, run a for loop from 2 to n-1.
- Check if n % i === 0. If true, not a prime no. else, is a prime no.

<br>

```javascript
function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```

**Refactor : ** <br>
We don't need to check for all the range.

```
1 X 18 = 18
2 X 9 = 18
3 X 6 = 18
6 X 3 = 18
9 X 2 = 18
18 X 1 = 18
```

We can check only for the half of it. i. e. for the square root of the number.

**_REFACTORED SOLUTION_**

```javascript
function isPrime(num) {
  for (i = 2; i * i <= num; i++) {
    // NOTE: i*i <= num is very imp.
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```

---

### 1. Input temperature in Celcius and print temp in Farhenheight

<br>

### Solution:

```java
import java.util.Scanner;

public class Temp {
  public static void main(String[] args) {
    Scanner inp = new Scanner(System.in);
    System.out.println("Temp in Celcius: ");
    float tempC = inp.nextFloat();

    float tempF = (tempC * 9/5) + 32;

    System.out.println(tempF);
  }
}
```
