// single pointer go brrr
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummy = new ListNode();
        dummy.next = head; 

        ListNode p = dummy;

        while (p.next != null ) {  
            if (p.next.val == val) {
                p.next= p.next.next;
            } else {
                p = p.next;
            }
        }
        return dummy.next;
    }
}

// two pointers go brr
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummy = new ListNode(0, head);
        ListNode curr = dummy, fast = head;

        while (fast != null ) {
            ListNode nxt = curr.next;

            if (fast.val == val) {
                curr.next = nxt;
            } else {
                curr = fast;
            }

            curr = nxt;
        }
        return dummy.next;
    }
}