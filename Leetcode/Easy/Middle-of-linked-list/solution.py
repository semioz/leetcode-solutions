#Just created the size function for fun :D
class Solution(object):
    def middleNode(self, head):
        def size():
            count = 0
            node = head
            while node:
                count += 1
                node = node.next
            return count
        slow = fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        if size() % 2 != 0:
            return slow
        return slow.next

class Solution(object):
    def middleNode(self, head):
        s,f = head,head
        while f and f.next:
            s = s.next
            f = f.next.next
        return s

