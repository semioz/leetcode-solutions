class Solution(object):
    def mostWordsFound(self, sentences):
        return max(i.count(" ")+1 for i in sentences)