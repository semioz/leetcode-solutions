/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i of words) {
        if (i === i.split("").reverse().join("")) return i
    }
    return ""
};