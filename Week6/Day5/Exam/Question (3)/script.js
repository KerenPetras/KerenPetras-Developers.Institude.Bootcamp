// 3. What is the result of the following code :

//     ```javascript
    const bestNumbers = [1, 2, 3]
    const secondBestNumbers = [7, 8, 9]
    
    const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
    console.log(favoriteNumbers)
//     ```

///Output: It will exacute all the three arrays
//// [4, 5, 6, 1, 2, 3, 7, 8, 9]