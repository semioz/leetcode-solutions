# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        s, f = head, head
        while f and f.next:
            s = s.next
            f = f.next.next
        
        prev = None
        while s:
            temp = s.next
            s.next = prev
            prev = s
            s = temp

        f_half, s_half = head, prev
        while s_half:
            if f_half.val != s_half.val:
                return False
            s_half = s_half.next
            f_half = f_half.next
        return True