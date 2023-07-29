# Bit Manipulation

> ### **_IMP FORMULAS_**
1. `n & 1` = LSB
2. `

## Bitwise operators

1. **AND**

   - All the operands should be True
   - `&`

   | `a` | `b` | `a & b` |
   | --- | --- | ------- |
   | 0   | 0   | 0       |
   | 0   | 1   | 0       |
   | 1   | 0   | 0       |
   | 1   | 1   | 1       |

   - Note: Whenever you `& 1` with any bit all the bits of the number remain the same

2. **OR**

   - If any one is true, entire expression is True.
   - `|`
     | a | b | `a OR b`|
     | -- | -- | -- |
     | 0 | 0 | 0 |
     | 0 | 1 | 1 |
     | 1 | 0 | 1 |
     | 1 | 1 | 1 |

3. **XOR**

   - Exclusive OR - Only one should be true
   - `^`
   - If more than two operands, 1 should be odd

     | `a` | `b` | `a^b` |
     | --- | --- | ----- |
     | 0   | 0   | 0     |
     | 0   | 1   | 1     |
     | 1   | 0   | 1     |
     | 1   | 1   | 0     |

   - **_Observation :_**
     1. Any number xor with 1 returns compliment of the number. <br>
        `a ^ 1 = 'a`
     2. `a ^ 0 = a` Any number xor with 0 gives itself
     3. Any number XOR with itself becomes 0 <br>
        `a ^ a = 0`

4. **Compliment (`~`)**

## Conversion of Number systems

### Number systems: (bases)

| No. | Name        | Base    | digits available                | example                                                         | representation |
| --- | ----------- | ------- | ------------------------------- | --------------------------------------------------------------- | -------------- |
| 1.  | Decimal     | Base 10 | 0,1,2,3,4,5,6,7,8,9             | 0,1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 | (20)10         |
| 2.  | Binary      | Base 2  | 0, 1                            | 0, 1, 10, 11, 100, 101, 110, 111                                | (7)10 = (111)2 |
| 3.  | Octal       | Base 9  | 0,1,2,3,4,5,6,7                 | 0,1,2,3,4,5,6,7, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21         | (9)10 = (11)8  |
| 4.  | Hexadecimal | Base 16 | 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f | 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,10,                             | (12)10 = (c)16 |

### Conversions:

1. Decimal to base b
2. Base b to 10 <br><br>
   _After knowing these two methods, we can convert any base b to 10 and from 10 to base c._ <br><br>

### **1. Base 10 to base b :**

1. Keep divding by base
2. Take reminder
3. Write it in oposite

![conversion from decimal to base b (here 2)](<./assets/conversion%20from%20decimal%20to%20base%20b%20(here%202).png>)
![conversion from decimal to base b (here 8)](./assets/converion%20from%20decimal%20to%20octal.png)

### **1. Base 10 to base b :**

Multiply and add the power of base with digits
( from right to left )

         Ex 1: (10001)2 = (?)10

         Solution:
         = (1 * 2^4) + (0 * 2^3) + (0 * 2^2) + (0 * 2^1) + (1 * 2^0)
         = 16 + 0 + 0 + 0 + 1
         = 17
      Thus (10001)2 = (17)10

      Ex 2: (1452)8 = (?)16

         = (1 * 8^3) + (4 * 8^2) + (5 * 8^1) + (2 * 8^0)
         = (1 * 512) + (4 * 64) + (5 * 8) + (2 * 1)
         = 512 + 256 + 40 + 1
         = 809
      Thus (1452)8 = (809)10

      // Converting (809)10 to hexadecimal now

      809 // 16 = 50   Reminder --> 9
      50 // 16 = 3     Reminder --> 2
      3 // 16 = 0      Reminder --> 3

      Therefore (809)10 = (329)16
      Therefore (1452)8 = (329)16

### **5. Left shift (`<<`)** <br>

Shifts all the bits to left and in the place of last bit, a 0 comes.

         e.g 12 << 1
         Inside the computer, it first converts the decimal to binary. (12 = 1100)

         1100 << 1 = 11000 = 24

![left shift operator](./assets/left%20shift%20operator.png)

> **a << 1 = 2a** <br>
> General formula: <br> > **a << b = a.2^b**

### **6. Right shift (`>>`)** <br>

Pops last bits. `a >> b` pops last `b` bits of a. <br>
E.g. 324 >> 4 pops last 4 bits of 324

      i.e 324 is 101000100
      324 >> 4 pops last four bits making it 10100
      which is 20

> **a >> 1 = a / 2** <br>
> General formula: <br> > **a << b = a / 2^b**

### Problems for concept clearing

1. Find if given number is even or odd

```python
def is_even(n):
   '''
   Explaination:
   n & 1 gives us last bit (AKA LSB - least significant bit)
   If that bit is 1 the number is odd if the LSB is 0 the number is even
   '''
   return n & 1 == 0
```

      For example, 13    and     14
      In binary it is 1101. In Binary 14 = 1110

       1101                   1110
      &0001                 & 0001
      ------                ---------
      0001                    0001

2. In given array, one number appears only once rest all numbers appear twice. Find the number that appears only once.

```python
def unique(nums):
   '''
   XOR follows associative propery.
   We know that a ^ a = 0.
   '''
   ans = 0
   for i in nums:
      ans = ans ^ i
   return ans
```

3. Find ith bit of a number

```python
def find_ith_bit(n,i):
   '''
   Suppose n = 13 (1101) and i = 3. It means we need to find out whether third bit is 1 or 0. It is 1 here.

   we create a number (mask) which when AND'd with n  would give the value of the third bit.
     1100
   & 0100
   -------
     0100

   If the result is not 0, it is 1, else, it is 1.

   We create the mask by : 1 << (i-1)
   '''

   mask = 1 << (i - 1)
   if n & mask == 0:
      return 0
   return 1
```

4. Set ith bit of a number n

```python
def set_ith_bit(n,i):
   '''
   Here, only if we OR the same mask with the number, we make the ith bit 1. (if it's already 1, keep it if not, make it 1)
   '''
   mask = 1 << (i-1)
   return n | mask
```

5. Reset ith bit of given number n.

```python
def reset_ith_bit(n,i):
   '''
   ` Here, to make it 0, the mask should be something like 11110111 and AND it with the number who's 4th bit needs to be reset.
   This could be achieved by just complimenting the previous mask.
   '''
   mask = ~(1 << (i-1))
   return n & mask
```

### Negative of a number in binary

- First bit of a datatype (say byte of 8 bits) is a _reserved bit._ It is called Most Significant Bit (MSB)
- If it is 1 the number is negative. 0 positive.

### 2's Compliment method

**Find the negative of a number** <br>
**_STEP 1 :_** Take the compliment of number <br>
**_STEP 2 :_** Add 1 to it.

         Ex. What is the negative of 13
         Sol:
         13 = 00001101

         step 1 - compliment / invert bits
         11110010

         step 2 - Add 1 to it

            11110010
         +  00000001
         ------------
            11110011

### _WHY DOES 2's COMPLEMENT METHOD WORK_

1.  When you try to store a number bigger than 8 (size of datatype) the excess bits (starting from right), the excess bits are ignored.

         e.g (500)10 = (111110100)2
         If we try to store 500 in a byte (a java datatype of size 8 bits), the 9th bit i.e. 1 does not have space in the byte. So it is ignored.

2.  Anything subtracted from 0 is negative of the number.

         e.g.

         (-18) = 0 - 10
         (-n) = 0 - n

         In binary,
         00000000 - 00010010 = -18 ------[1]

3.  If 1 is added in front of those 0s that 1 will be ignored (as per point 1)

         Therefore, we can safely put 1 before the zeros without affecting the result of the original subtraction (i.e. 0-n)
         In binary, if 1 + 00000000, it becomes 100000000 (256)
         Now subtract 1 from the number.
         It becomes 111111111.
         Therefore, our original subtraction becomes
            111111111 - 00010010 + 1
            = ~(18) - 1              -----[2]

         Thus, from [1] & [2], we can see how 2's compliment works

## Range of numbers

- Range of a datatype is the number of (combinations of) bits that can be stored in the datatype.
- The general formula is `-2^(n-1) to 2^(n-1) - 1`
- Derivation:

      Let's take example of a datatype with size 8 bits.

      - First bit is MSB (most significant bit) which decides the sign of the number. So we get 7 bits.

      - Every bit can have either 0 or 1.
        Thus,
        Total number of bits combinations possible
        = 2*2*2*2*2*2*2
        = 2^7
        = 128

      - 0 is a positive number
      - Thus Range = -128 to -1 + 0 + 127
      Therefore if n is the size of the datatype, general formula of range = 2^(n-1) to 2^(n-1) -1

### Problems for concept clearing

6.  Find the position of the right-most set bit.

         e.g. Given  number 180 = (10110100)2, so here, rightmost set but is 3rd.

         Approach: We need something like A | B
         where A is all the bits of the left side of the rightmost set bit and B is all 0s.

         The desired mask is something that 0es every bit from A and gives 1 at the end. Something like this:

            10110100
         &  01001100
         -------------
            00000100

         How to get this mask?
         This is (compliment of a)

         n & (-n) gives us the rightmost set bit
