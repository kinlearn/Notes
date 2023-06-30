# Functions in Java

### Syntax of function in Java

```java
accessModifer returnType functionName(paramType paramName, paramType paramName) {
    body
    return value;
}
// E.g.
public static void main(String[] args) { // <-- This is the main method.
    // use of method
    System.out.println(isEven(54)); // <- Passing / calling function
    // Declaration of method
    private static boolean isEven(int num) {
        return num % 2 == 0;
}
```

- Parameters have to passed in order they're declared
- In java, there's only **_pass by value._** There's no pass by reference.
  - In case of non-premitives (objects etc.) reference copy is passed

### Scope

- Class scope, functon scope, loop scope, block scope

### Shadowing in Java

- Practice of using two variables with the same name within the scope that overlaps

```java
int a = 90;
psvm(String[] args) {
    sout(a);
    int a = 40;
    sout(a);
    fun();
}
static void fun(){
    sout(a);
}

// we get 90 - finds if there's a local var named a above? No. So, gets a from the parent scope. prints 90
// 40 - now a is initialized inside the block. So, it peints the local variable
// 90 - Outside the scope of main function, we print a. Takes from parent (class level)
```

### Variable arguments

- When we don't know how many arguments we are going to pass
- Use three dots before a para name.
- Variable length arguments should always come at the end

```java
import java.util.Arrays;
public class VarAgrs {
    psvm(String[], args){
        fun(4,5,3,5,6,4); // You can input any number of argumnets to fun after providing first two int arguments
    }
    static void fun(int a, int b, int ...v){
        sout(Arrays.toString(v));
    }
}
```

### Function Overloading

Functions with same name but with different arguments (names/ types)

- Calculated at compile time
