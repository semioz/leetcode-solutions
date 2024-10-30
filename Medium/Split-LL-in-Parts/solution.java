
class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        ListNode p = head;
        Integer count = 0;
        ListNode[] res = new ListNode[k];
        
        while (p != null) {
            p = p.next;
            count++;
        };

        p = head;
        Integer baseLen = count / k, remainder = count % k;
        for (int i = 0; i < k; i++) {
            ListNode dummy = new ListNode(0), pHead = dummy;
            for (int j = 0; j < baseLen + (i < remainder ? 1 : 0); j++) {
                pHead = pHead.next = new ListNode(p.val);
                if (p != null) p = p.next;
            }
            res[i] = dummy.next;
        };
        return res;
    }
}