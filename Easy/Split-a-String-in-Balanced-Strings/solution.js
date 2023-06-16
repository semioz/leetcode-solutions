/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(s) {
    let [currCount, balanceCount] = [0, 0];
    for (let i of s) {
        if (i == "R") currCount++;
        else currCount--;
        if (currCount == 0) balanceCount++;
    }
    return balanceCount;
};