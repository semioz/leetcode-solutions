class Solution(object):
    def firstPalindrome(self, words):
        return next((i for i in words if i == i[::-1]),"")