class Solution(object):
    def topKFrequent(self, nums, k):
        freq,ans = {},[]
        for n in nums:
            if n in freq:
                freq[n] += 1
            else:
                freq[n] = 1
        if k == 1:
            ans.append(max(freq,key=freq.get))
        else:
            freq_sorted = sorted(freq,key=freq.get,reverse=True)
            ans = freq_sorted[:k]
        return ans