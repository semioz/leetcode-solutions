class ListNode {
     val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let thing = new ListNode();
    let tail = new ListNode();
    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            l1 = l1.next;
        }else{
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if(l1)tail.next = l1;
    if(l2)tail.next = l2;
    return thing.next;
};


