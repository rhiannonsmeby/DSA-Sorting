//1. Understanding Merge Sort
//Given the following list of numbers 
//       21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
//sort phase:
//1) 21, 1, 26, 45, 29, 28, 2, 9            16, 49, 39, 27, 43, 34, 46, 40
//2)21, 1, 26, 45    29, 28, 2, 9        16, 49, 39, 27     43, 34, 46, 40
//3)21, 1    26, 45  29, 28   2,9       16, 49    39, 27   43, 34    46, 40
//4) 21  1  26  45  29  28  2  9  16  49  39  27  43  34  46  40 
//merge phase:
//0) 21   1   26   45   29   28   2   9   16   49  39    27   43   34   46    40 
//1)  1,21     26,45     28,29     2,9     16,49    27,39      34,43     40,46
//2)    1,21,26,45         2,9,28,29         16,27,39,49          34,40,43,46
//3)       1,2,9,21,26,28,29,45                  16,27,34,39,40,43, 46,49
//4)             1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49         


//a. What is the resulting list that will be sorted after 3 recursive calls 
//to mergesort? 28,29
//b. What is the resulting list that will be sorted after 16 recursive calls 
//to mergesort? 1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49
//c. What are the first 2 lists to be merged? 21 & 1 or 1, 21 & 26, 45???
//d. Which two lists would be merged on the 7th merge? 34, 43 ?? or the final 2

//2. Understanding quicksort
/*1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step 
has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about 
the partition step? Explain your answer.
- The pivot could have been either 14 or 17- everything to the left of both 14 and 17 are smaller, everything to the right of both 14 & 17
are larger
2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the
quicksort algorithm.

When using the last item on the list as a pivot
- 14,17,13,15,19,10,3,16,9,12 **12 is the pivot
- 3,10,9,12,19,17,14,16,13,15 **first round through (partition)
- 3,10,9,12,14,13,15,16,17,19 **second partition
When using the first item on the list as a pivot
- 14,17,13,15,19,10,3,16,9,12 **14 is the pivot
- 13,10,3,9,19,17,14,16,15,12 **idk if you can change the pivot right away when it's in the front? 
- 12,10,3,9,17,14,16,15,12,19 **second partition???
*/
//3. Implementing quicksort
function qSort(data) {

}
console.log(qSort())
//4.Implementing merge sort
function mSort(data) {
    //exploits the fact that arrays of 0 or 1 elements are always sorted
    //works by decomposing an array into smaller sub arrays
}

//5. Sorting a linked list using merge sort

//6. Bucket sort

//7. Sort in place

//8. Sorting books