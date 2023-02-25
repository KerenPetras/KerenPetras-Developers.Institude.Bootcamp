// 2. For the code below, what does `arrNums.splice(2, 0)` return?

//     ```javascript
    const arrNums = [1, 2, 3, 4, 5];
    const spliceNums = arrNums.splice(2, 0);
    console.log(spliceNums);

//     ```

// results: the splice method removes a copy of section of array.
/// .sclice(x,y) in the first parameter you decided from which in index to star
//// and in the second parameter you decided whats the end of the index you would like to delete.

//// Output: In this case, since no elements were removed from the array, the splice method returns an empty array. 