/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let finale = getFullNum(reverse(l1)) + getFullNum(reverse(l2))
    return reverse(numToLinkedList(finale))
};

function numToLinkedList(number) {
    numberStr = String(number)
    head = ListNode(parseInt(numberStr[0]))
    curr = head

    for (let digit = 1; digit < numberStr.length; digit++) {
        new_node = ListNode(parseInt(digit))
        curr.next = new_node
        curr = new_node
    }
    return head
}

// Get the full number from a linked list
function getFullNum(head) {
    fullNum = ""
    curr = head
    while (curr) {
        fullNum += String(curr.val)
        curr = curr.next
    }
    return parseInt(fullNum)
}

function reverse(head) {
    let [prev, curr] = [null, head];

    while (curr) {
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}