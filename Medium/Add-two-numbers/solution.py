# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Initial Approach - With helper functions
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        finale = getFullNum(reverse(l1)) + getFullNum(reverse(l2))
        return reverse(numToLinkedList(finale))

def reverse(head):
    prev,curr = None,head
    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    return prev

def getFullNum(head):
    fullnum = ""
    curr = head
    while curr:
        fullnum += str(curr.val)
        curr = curr.next
    return int(fullnum)

def numToLinkedList(number):
    number_str = str(number)
    head = ListNode(int(number_str[0]))
    curr = head

    for digit in number_str[1:]:
        new_node = ListNode(int(digit))
        curr.next = new_node
        curr = new_node
    return head


# ------------------------Second Approach------------------------
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        dummy = ListNode()
        cur = dummy

        carry = 0
        while l1 or l2 or carry:
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            #new digit
            val = v1 + v2 + carry
            carry = val // 10
            val = val % 10
            cur.next = ListNode(val)

            #update pointers
            cur = cur.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return dummy.next