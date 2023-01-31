# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

#Reversing The List Approach
#O(2n) - Time Complexity
#O(n) - Space Complexity 
class Solution(object):
    def reverseList(head):
            prev,curr = None,head
            while curr:
                temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            return prev
    def removeNthFromEnd(self, head, n):

        

