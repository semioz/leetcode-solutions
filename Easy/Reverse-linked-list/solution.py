#Iterative Solution - Two Pointers
#Time Complexity O(n) - Memory O(1)

class Solution(object):
    def reverseList(self, head):
        prev, curr = None, head

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev