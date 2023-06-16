let isPalindrome = function(s) {
    let [l, r] = [0, s.length - 1];
    while (l < r) {
        while (l < r && !isAlphaNum(s[l])) {
            l++;
        }
        while (r > l && !isAlphaNum(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() != s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
};

let isAlphaNum = function(c) {
    return ("A".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0) ||
        "a".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0) ||
        "0".charCodeAt(0) <= c.charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0)
    )
};
