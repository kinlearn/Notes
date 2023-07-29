# Arrays & ArrayLists

1. Intro
2. Internal Working of Arrays in Java
3. Array Input
4. Multidimentional Arrays
5. Dynamic Arrays
6. Array Functions, ArrayLists

## 1. Intro

### Array

Collection of datatypes (premitives/objects/complex datatype)

### Syntax

`dataType[] variableName = new type[size];`
e.g.

```java
// declaring and initializing a one dimentional integer type array of size 5, named "rollNo"
int [] rollNo = new int[5]; // The object being created in the heap memory

int[] rollNo = {23,25,24,65,67};
// Another way to declare and intialize the same array.
```

- All the elements of array must be of same type.

![Internal working of arrays in Java](./assets/Internal%20working%20of%20arrays%20in%20Java.png)

- in Java, there's no concept of pointers
- In Java, arrays may not be continueous. <br>Because: 1. Array objects are in heap 2. Heap objects are not contineous 3. Dynamic memory allocation
  Therefore we can say, it depends on Java.
- Initially, if only declared not initialized, array of size n has 0 as default int value, null as default string value.
- **`null`** : Special literal. Not a datatype. Like none in python. Any reference variable has default value null.
- Each element of array is also an object pointing towards some different location.

## Array Input

1. literal way:

```java
String[] example = new String[2];
example[0] = "this ways is";
example[1] = "not used frequently";
```

2. Using for loop / for-each loop

```java
for (int num : arr) {
    sout(num + " ");
}
```

### Array of objects

![Internal working of arrays of non-primitives](<./assets/Internal%20working%20of%20arrays%20of%20non-primitives%20(objects).png>)

## Multidimentional Arrays

### 2D arrays:

**Syntax:**

```java
int[][] arr = new int[row][col]; // mentioning column size is not mandatory.

int[][] matrix = {
    {1,2,3},
    {4,5,-3},
    {0,1,2}
}

matrix[0] // is [1,2,3]
matrix[1][1] // is 5 i.e. [4,5,-3][1] which is 5
```

- Array of arrays

## ArrayList

- When the size of arrays is not known, we use arrayList.
- Similar to in vectors in c++
- Part of Collections framework
- It's in the `java.util.ArrayList`
- **Syntax:**

```java
import java.util.ArrayList;
ArrayList<DataTypeWrapperClasses> yourName = new ArrayList<>(initialCapacity);
// Example
ArrayList<Integer> list = new ArrayList<>(10);
// Adding elements to arraylist
list.add(68);
list.add(115);
```

### ArrayList methods

`.contains()`, `.set(index, newValue)`, `.remove()`, `.get()`

### Internal Working of ArrayList

1. Size is fixed internally
2. When the array fills to a certain amount (e.g. 50% etc.) it creates a new arrayList of size 2X

---

# Strings and StringBuilder

### Contents

1. Intro
2. `PrintStream` class
3. `toString` method
4. Pretty printing in Java
5. String concatanation operator
6. String performance
7. StringBuilder
8. StringBuilder methods

## Intro

- A string is a collection of characters.
- Most commonly used class in Java
- Every string we create is an object of class String

### Internal working of strings

![internal working of strings](./assets/Internal%20working%20of%20strings%20and%20pool%20inside%20heap%20memory.png)

Here, two reference variables (name and b) are pointing towards the same string object stored in a special part of the heap memory called pool.

- String pool is a separate memory structure in the heap.
- All the similar values are not re-created
  - More optimization
  - Security
- `==` checks if ref vars are pointing to same objects
- Creating different objects of same value

```java
String a = new String("Kunal"); // Created objects outside of pool but in heap
```

- When you only need to check values, use `.equals()` method.
  (`.equals()` => values only)

- **_IMP :_** To get character from string, use `.charAt()` method

```java
String name = "Ajinkya";
sout(name.charAt(1)); // prints "j"
```

## Pretty printing in Java

1. use `.printf()` instead of `.println()`
2. Use placeholders like
   1. `%i` for integers
   2. `%.2f` for floats (`.2` is for printing only two decimal points)
   3. `%s` for strings
3. Put the placeholders in the string you want to print.
4. After the string, put the value after comma in order

```java
System.out.printf("Pi is %.3f, which is my favourite number!", Math.PI);
// Prints:
// Pi is 3.142, which my favourite number.
```

## String concatenation operator

- When an integer is concatenated, (Added with a string), it is converted to it's wrapper type (i.e. Integer class) that will call `toString()` of it's own.

```java
System.out.println("a" + 1); // prints "a1"
// The integer 1 is converted to Integer object which then calls `.toString()` method of it's own.
// Therefore the number 1 is converted to the string "1" and then concatenated with the string "a" to form a new object of value "a1" which is then printed.
```

- It gets concatenated with every object which has and calls `toString()` method of their own.

```java
System.out.println("a" + new ArrayList<>()); // prints a[]
// Calls the toString() of ArrayList and then returns [] as a string which then is concatenated with a
```

- **IMP :** The operator `+` in java is only defined from primitives and when any one the value is a string. There must be at least one sting otherwise you can not cancatenate.

![working of the plus operator in java](<./assets/Working%20of%20the%20plus%20operator%20in%20Java%20(concatenation).png>)

```java
sout(new Integer(54) + new ArrayList<>()); // Error
// Although there are two objects that have toString methods of their own, but since there's no string in the expression, java can not concatenate.

sout(new Integer(54) + " " + new ArrayList<>()); // prints 54[]
```

- **Operator Overloading :** <br>
  When an operator also performs different operation with different operants, we call this as "operator overloading"
  <br> e.g. For strings, the operator `+` performs concatenation.

- Operator overloading is not supported in Java (for good s/w engineering practices)
- Concatenation is the only exception where `+` operator is overloaded.

- Concatenation results in creating a new String object in the pool.

- Performance: String performance is poor, as it takes more space as it creates new objects everytime a concatenation is performed.

```java
public class Performance {
    public static void main (String[] args) {
        String series = "";
        for (int i = 26; i < 26; i++) {
            char ch = (char)('a' + i);
            series += ch;
        }
        System.out.println(series);
    }
}
```

This code successfully produces the string "abcdefghijklmnopqrstuvwxyz" but it's space complexity is O(n2) which is very poor.

## StringBuilder

```java
public class SB { // Since there's already a class named StringBuilder that we are going to use, we are not using the same name.
    public static void main (String[] args) {
        StringBuilder builder = new StringBuilder();

        for (int i = 26; i < 26; i++) {
            char ch = (char)('a' + i);
            builder.append(ch)
        }
        System.out.println(builder.toString());
    }
}
```

This will also return the same string, with space complexity O(n).

## String methods
