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
    public boolean isPalindrome(ListNode head) {
        ListNode s = head, f = head;
        while (f != null && f.next != null) {
            s = s.next;
            f = f.next.next;
        };

        ListNode prev = null;
        while (s != null) {
            ListNode temp = s.next;
            s.next = prev;
            prev = s;
            s = temp;
        }

        ListNode f_half = head, s_half = prev;
        while (s_half != null) {
            if (s_half.val != f_half.val) {
                return False;
            }
            f_half = f_half.next;
            s_half = s_half.next;
        }
        return true;
    }
}