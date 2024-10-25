// single pointer go brr
func removeElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{
		Next: head,
	}

	p := dummy

	for p.Next != nil {
		if p.Next.Val == val {
			p.Next = p.Next.Next
		} else {
			p = p.Next
		}
	}
	return dummy.Next
}

// two pointers go brr