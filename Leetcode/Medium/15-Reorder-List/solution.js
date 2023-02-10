/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let [slow, fast] = [head, head];
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    let [prev, curr] = [null, slow.next];
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    slow.next = null;
    let [head1, head2] = [head, prev];
    while (head2) {
        let [temp1, temp2] = [head1.next, head2.next];
        head1.next = head2;
        head2.next = temp1;
        [head1, head2] = [temp1, temp2];
    }
};