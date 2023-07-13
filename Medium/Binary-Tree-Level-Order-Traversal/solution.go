func levelOrder(root *TreeNode) [][]int {
	result := [][]int{}
	q := []*TreeNode{}
	if root != nil {
		q = append(q, root)
	}

	for len(q) > 0 {
		level := []int{}
		size := len(q)
		for i := 0; i < size; i++ {
			node := q[0]
			q = q[1:]
			level = append(level, node.Val)
			if node.Left != nil {
				q = append(q, node.Left)
			}
			if node.Right != nil {
				q = append(q, node.Right)
			}
		}
		result = append(result, level)
	}
	return result
}