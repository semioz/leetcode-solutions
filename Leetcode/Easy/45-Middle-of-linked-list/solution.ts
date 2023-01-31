/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function middleNode(head: ListNode | null): ListNode | null {
    let [slow,fast] = [head,head];
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//Using size
function middleNode2(head: ListNode | null): ListNode | null{
    let size = function(){
        let [count,node] = [0,head];
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }
    let [slow,fast] = [head,head];
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    if(size() % 2 != 0)return slow;
    return slow.next;
};