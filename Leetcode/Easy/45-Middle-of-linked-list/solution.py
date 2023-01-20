#Just created the size function for fun :D
def middleNode(self, head):
    def size():
        count = 0
        node = head
        while node:
            count += 1
            node = node.next
        return count 
    slow,fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    if size % 2 != 0:
        return slow
    return slow.next