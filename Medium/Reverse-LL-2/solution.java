/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

// the thing is that left and right arent node.vals they're 1-based indexes. wtf?
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(0, head);

        // reaching the node at position 'left'
        ListNode leftPrev = dummy, curr = head;
        for (int i = 0; i < left -1; i++) {
            leftPrev = curr;
            curr = curr.next;
        }

        // now, cur='left', leftPrev='node before left'
        // reverse from left to right. // right-left+1 for taking the block of related nodes 
        ListNode prev = null;
        for (int j =0; j < right-left+1) {
            ListNode temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        leftPrev.next.next = curr; // curr is node after 'right'
        leftPrev.next = prev; // prev is 'right'
        return dummy.next;
    }
}