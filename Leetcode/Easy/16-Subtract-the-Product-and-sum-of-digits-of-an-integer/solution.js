/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = Array.from(String(n), Number);
    const sum = arr.reduce((a, b) => a + b);
    const prod = arr.reduce((a, b) => a * b);
    return prod - sum
};