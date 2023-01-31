/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let duplicateZeros = function(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] == 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i += 2;
        } else i++;
    }
};