class Solution(object):
    def merge(self, intervals):
        #sort the intervals array by first key
        intervals.sort(key=lambda i:i[0])
        output = [intervals[0]]

        for start,end in intervals:
            last = output[-1][1]
            if start <= last:
                output[-1][1] = max(last,end)
            else:
                output.append([start,end])
        return output