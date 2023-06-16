var lengthOfLongestSubstring = function(s) {
    let [l, r] = [0, 0];
    let seen = new Set();
    let max_len = 0;

    while (r < s.length) {
        if (!seen.has(s[r])) {
            seen.add(s[r]);
            r++;
            max_len = Math.max(max_len, r - l)
        } else {
            seen.delete(s[l]);
            l++
        }
    }
    return max_len;
};