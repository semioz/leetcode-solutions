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
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode l = dummy, r = head;
        while (n > 0 && r != null) {
            r = r.next;
            n--;
        }

        while (r != null) { 
            l = l.next;
            r = r.next;
        }

        l.next = l.next.next;
        return dummy.next;
    }
}