class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        stack = []
        answer = [0] * n
        for i in range(n):
            while stack and temperatures[stack[-1]] < temperatures[i]:
                v = stack.pop()
                answer[v] = i - v
            stack.append(i)
        return answer


# Brute Force - of course slow anon!
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        final = [0] * n
        for i in range(n):
            for j in range(i+1, n):
                if temperatures[j] > temperatures[i]:
                    final[i] = j-i
                    break
        return final