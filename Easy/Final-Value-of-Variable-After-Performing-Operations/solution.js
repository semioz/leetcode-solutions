/**
 * @param {string[]} operations
 * @return {number}
 */
let finalValueAfterOperations = (operations) => {
    let count = 0;
    for (let i of operations) {
        if (i.startsWith('++') ||  i.endsWith('++')) count++;
        else count--;
    }
    return count;
};