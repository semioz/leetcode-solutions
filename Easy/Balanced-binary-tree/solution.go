/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type BalanceTree struct {
	Balance bool
	Height  int
}

func isBalanced(root *TreeNode) bool {
	return dfs(root).Balance
}

func dfs(root *TreeNode) BalanceTree {
	if root == nil {
		return true, 0
	}
	left, right := dfs(root.Left, root.Right)
	balanced := (left.Balance && right.Balance && int(math.Abs(float64(left.Height)-float64(right.Height))) <= 1)
	return BalanceTree{balanced, 1 + max(left[1], right[1])}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}