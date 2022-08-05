/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let temp = 0;
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length;
        if (temp > max) max = temp
    }
    return max;
}