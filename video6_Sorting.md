# Sorting Algorithms

1. Bubble Sort
2. Insertion Sort
3. Selection Sort
4. Cycle Sort

## Bubble Sort

### **At a glance :**

- AKA Sinking sort/ Exchange sort
- In-place, stable
- Space complexity constant O(1)
- Time complexity:
  - Best case - O(n)
  - Worst case - O(n2)

---

algo:

- Set two counters - Outer loop for `0 to (n - 1)` times as the last remaining element doesn't need further check
- Inner loop from 1 to `(arr.length - i)` times (as last places don't need check)
- swap adjacent ele if greater. (`if j < j-1:` swap)
- If already sorted, j never swaps (best case):<br>
  1. raise a flag `swapped` before the inner loop.
  2. In the if condition, make it `true`.
  3. After the inner loop completes, if `(!swapped) break;`

---

### Intro:

- In bubble sort, we compare the adjacent elements and replace the greater one to last (right if sorting for ascending)
- With each pass, the largest element comes at the end.

### Time Complexity:

- **Space complexity :** O(1)
- **Best case time complexity :** O(n) <br>
  In best case, the array is already sorted. In this case, the inner pointer never swaps. Hence outer loop runs only once and inner loop run for n times.
- **Worst case time complexity :** <br>
  In the worst case, the array is inversely sorted. Here, the inner loop is run for (n-1) times and these inner loops run for (n - 1) times.

          Therefore, if the array is of length 4, and inversely sorted, the loop run is like:
          ---------pass 1 : i = 0
          [4,3,2,1]
          3,4,2,1
          3,2,4,1
          3,2,1,4 👈 pass 1 completes |  n = 3
          ------------ i = 1 (next iteration of outer loop)
          2,3,1,4
          2,1,3,4 👈 pass 2 completes | n = 2
          ------------ i = 2
          1,2,3,4 👈 pass 3 completes | n = 1
          ------------ i = 3
          outer loop ends (as set for arr.length - 1 times)

          Total number of comparisons = (n - 1) * (n - 1)
                                      = n**2 - 2n + 1
          OR  no. of comparisons = (n - 1) + (n - 2) (n - 3)
                                 = 3n - (1+2+3)
                                 = 3n - (n*(n+2) / 2)
                                 = 3m - (n**2 + n)/2
                                 = (6n - n**2 - n)/ 2

          Therefore O(n2)

---

Code

```java

```
