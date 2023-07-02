# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Brute Force - With helper functions
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        finale = getFullNum(reverse(l1)) + getFullNum(reverse(l2))
        return reverse(numToLinkedList(finale))


def numToLinkedList(number):
    number_str = str(number)
    head = ListNode(int(number_str[0]))
    curr = head

    for digit in number_str[1:]:
        new_node = ListNode(int(digit))
        curr.next = new_node
        curr = new_node
    return head

def getFullNum(head):
    fullnum = ""
    curr = head
    while curr:
        fullnum += str(curr.val)
        curr = curr.next
    return int(fullnum)

def reverse(head):
    prev, curr = None,head
    while curr:
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    return prev
