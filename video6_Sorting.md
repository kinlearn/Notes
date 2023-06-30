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

```javascript
function bubbleSort(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}
```

---

## Selection Sort

### **At a glance :**

- In-place, non-stable
- Use case : Performs well in small size lists. arrays
- Space complexity constant O(1)
- Time complexity:
  - Best case - O(n2)
  - Worst case - O(n2)

---

algo:

1. We need to loop over the entire array. For loop from `i=0; i<arr.length`
2. Set the `lastIndex` variable. This will be `arr.length - 1 - i` as `i` starts from 0, and we don't need last variable for the last iteration.
3. Set a `maxIndex` variable so that we can swap it with the `lastIndex` variable.
4. Create a `getMaxIndexInRange` method which takes an array, and two index numbers and returns the max index of the range.
5. In the for loop, swap `lastIndex` with `maxIndex`

---

### Intro:

- In selection sort, we simply swap max ele in the range with the last index. This range is full length initially, and with each iteation, it gets reduced by 1.
- Since we select the max (or min) and swap with the last (or first in case of min) place, we call it Selection sort.

### Time Complexity:

- **Space complexity :** O(1)
- **Best case time complexity :** O(n2) <br>
  In best case, even if the array is already sorted, we check the biggest in the range and replace it with the last. So, there's no difference in worst and best case complexities.
- **Worst case time complexity :** <br>
  In the worst case, the array is inversely sorted. Here, the inner loop is run for (n-1) times and these inner loops run for (n - 1) times.

          Therefore, if the array is of length 4, and inversely sorted, the loop run is like:
          ---------pass 1 : i = 0
          [4,3,2,1]
          1,3,2,4
          1,2,3,4

        no. of comparisons = (n - 1) + (n - 2) + (n - 3)
                                 = 3n - (1+2+3)
                                 = 3n - (n*(n+2) / 2)
                                 = 3m - (n**2 + n)/2
                                 = (6n - n**2 - n)/ 2

          Therefore O(n2)

---

Code

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lastIndex = arr.length - i - 1;
    let maxIndexInRange = getMaxIndexInRange(arr, 0, last);
    swap(arr, maxIndexInRange, lastIndex);
  }

  function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }

  function getMaxIndexInRange(arr, startIndex, endIndex) {
    let maxIndexInRange = startIndex;
    for (let i = startIndex; i <= endIndex; i++) {
      if (arr[i] > arr[maxIndexInRange]) {
        maxIndexInRange = i;
      }
    }
    return maxIndexInRange;
  }
}
```

## Insertion Sort

### **At a glance :**

- In-place, stable
- Use case : Small size partially sorted arrays (Benefit : steps are reduced)
- Space complexity constant O(1)
- Time complexity:
  - Best case - O(n)
  - Worst case - O(n2)

---

### **_Important:_**

1. For `i = 0` start `j = i+1`
2. `i` will run from `0` to `n-2` (including)
3. `j` has to be greater than `0`
4. Break when `j` is not smaller than `j-1`

algo <br>

1. Loop from `i=0` to (including) `n-2`
2. In the inner loop, `j` will approach from the right to left. `j` will check if the ele[j] is less greater than ele at LHS and break when it sees a number that is greater than ele[j].
3. `j` should not exceed 0.

---

### Intro:

- In insertion sort, we sort the array partially.
- The idea is to take ele[i1] and insert it in its correct position in the (sorted) LHS part
  ![insertion sort](./assets/Insertion%20sort.png)

### Time Complexity:

- **Space complexity :** O(1)
- **Best case time complexity :** O(n) <br>
  In best case, arr[j] checks for `arr[j] < arr[j-1]` and breaks. i++ and continues. This is time complexity of O(n).
- **Worst case time complexity :** <br>
  In the worst case, the array is inversely sorted. Here, the inner loop is run for (n-1) times and these inner loops run for (n - 1) times.

          Therefore, if the array is of length 4, and inversely sorted, the loop run is like:
          ---------pass 1 : i = 0
          [4,3,2,1]
          3,4,2,1
          2,3,4,1
          1,2,3,4

        no. of comparisons = (n - 1) + (n - 2) + (n - 3)
                                 = 3n - (1+2+3)
                                 = 3n - (n*(n+2) / 2)
                                 = 3m - (n**2 + n)/2
                                 = (6n - n**2 - n)/ 2

          Therefore O(n2)

---

Code

```javascript
function insertionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j=i+1; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else {
        break;
      }
    }
}
```

## Cyclic Sort

### **At a glance :**

- In-place, non-stable
- Use case :When given nos are in range **1 - n**
- Space complexity constant O(1)
- Time complexity:
  - Best case - O(n)
  - Worst case - O(n)

---

algo <br>

1. while loop. Set i=0 outside.
2. Inside while loop, let `correctIndex = arr[i]-1`
3. If arr[i]!=arr[correctIndex], swap(i,correct) else i++

---

### Intro:

- In cyclic sort, we deal with numbers from 1 to n or 0 to n. The ideal position of the number (elements) is either arr[i]-1 or arr[i]. Set `correctIndex` to it's respective position,

### Time Complexity:

- **Space complexity :** O(1)
- **Best case time complexity :** O(n) <br>
  In the best case, there's n-1 number of comparisons. Therefore, O(n)
- **Worst case time complexity :** <br>
  In the worst case,

      [3, 5, 2, 1, 4] <-- is arr[0]==arr[ideal]? no -> swap  1 swap
      [2, 5, 3, 1, 4] 1 swap
      [5, 2, 3, 1, 4] 1 swap
      [4, 2, 3, 1, 5] 1 swap
      [1, 2, 3, 4, 5] 1 swap

      total number of swaps = total number of ele = n
      Total comparisons = (n-1)
      Thus total = (n-1) + n = 2n-1

      Therefore time complexity is O(n)

---

Code

```javascript
function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    let correctIndex = arr[i] - 1;
    if (arr[i] != arr[correctIndex]) {
      let temp = arr[i];
      arr[i] = arr[correctIndex];
      arr[correctIndex] = temp;
    } else {
      i++;
    }
  }
}
```
