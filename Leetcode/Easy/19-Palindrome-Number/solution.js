/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
    if (x < 0) false;
    return x.toString() === x.toString().split("").reverse().join("")
};