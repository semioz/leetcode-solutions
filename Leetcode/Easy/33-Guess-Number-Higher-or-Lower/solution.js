/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while (true) {
        let mid = Math.round((left + right) / 2);
        let res = guess(mid);
        if (res > 0) left = mid + 1;
        else if (res < 0) right = mid - 1;
        else return mid;
    }
}