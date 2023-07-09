// DFS
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	left := maxDepth(root.Left)
	right := maxDepth(root.Right)

	if left > right {
		return left + 1
	}
	return right + 1
}

// BFS
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	q := list.New()
	//Inserts a new element at the back of the list
	q.PushBack(root)
	level := 0

	for q.Len() > 0 {
		level++
		size := q.Len()

		for i := 0; i < size; i++ {
			//Removes the element from the list and returns its value
			//Front returns the first element of the list
			node := q.Remove(q.Front()).(*TreeNode)
			if node.Left != nil {
				q.PushBack(node.Left)
			}
			if node.Right != nil {
				q.PushBack(node.Right)
			}
		}
	}
	return level
}
