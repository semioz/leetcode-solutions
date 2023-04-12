class Solution(object):
    def lengthOfLongestSubstring(self, s):
        l, r = 0,0
        seen = set()
        max_len = 0
        while r < len(s):
            if s[r] not in seen:
                seen.add(s[r])
                r += 1
                max_len = max(max_len,r-l)
            else:
                seen.remove(s[left])
                left += 1
        return max_len
