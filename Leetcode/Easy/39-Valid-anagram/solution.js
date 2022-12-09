//* Time O(N) | Space O(N)
let isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let [countS, countT] = [new Map(), new Map()];
    for (let i of countS) {
        let [freqS, freqT] = [(countS.get(i) || 0) ++, (countT.get(i) ||  0) ++];
        countS.set(i, freqS);
        countT.set(i, freqT);
    }
};