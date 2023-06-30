class Solution(object):
    def findSmallestSetOfVertices(self, n, edges):
        pool = collections.defaultdict(list)
        for src,dest in edges:
            pool[dest].append(src)
        
        fnl = []
        for i in range(n):
            if not pool[i]:
                fnl.append(i)
        return fnl