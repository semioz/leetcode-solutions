class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []
        rules = ["C", "D", "+"]
        for i, rule in enumerate(operations):
            if rule not in rules:
                stack.append(int(operations[i]))
            elif rule == rules[0]:
                stack.pop()
            elif rule == rules[1]:
                stack.append(stack[-1]*2)
            elif rule == rules[2]:
                stack.append(stack[-1] + stack[-2])
        return sum(stack)
