class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int digit1 = (l1 != null) ? l1.val : 0;
            int digit2 = (l2 != null) ? l2.val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode newNode = new ListNode(digit);
            tail.next = newNode;
            tail = tail.next;

            l1 = (l1 != null) ? l1.next : null;
            l2 = (l2 != null) ? l2.next : null;
        }

        ListNode result = dummyHead.next;
        dummyHead.next = null;
        return result;
    }
}

////-----------------------------------------------------------------------------

import java.math.BigInteger;

public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // digits are stored in reverse order
        BigInteger num1 = getNumFromLl(reverseLl(l1));
        BigInteger num2 = getNumFromLl(reverseLl(l2));
        BigInteger sum = num1.add(num2);

        return reverseLl(numToLl(sum));
    }

    private ListNode reverseLl(ListNode ll) {
        ListNode prev = null, head = ll;
        while (head != null) {
            ListNode temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }
        return prev;
    }

    private BigInteger getNumFromLl(ListNode ll) {
        StringBuilder fullNum = new StringBuilder();
        ListNode curr = ll;
        while (curr != null) {
            fullNum.append(curr.val);
            curr = curr.next;
        }

        return new BigInteger(fullNum.toString());
    }

    private ListNode numToLl(BigInteger num) {
        String numStr = num.toString();
        ListNode head = new ListNode(Character.getNumericValue(numStr.charAt(0)));
        ListNode curr = head;

        for (int i = 1; i < numStr.length(); i++) {
            int digit = Character.getNumericValue(numStr.charAt(i));
            ListNode newNode = new ListNode(digit);
            curr.next = newNode;
            curr = newNode;
        }
        return head;
    }
}
