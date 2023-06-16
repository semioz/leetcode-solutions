class Solution(object):
    def sortSentence(self, s):
        words = s[::-1].split()
        words.sort()
        final = [word[1:][::-1] for word in words]
        return ' '.join(final)
