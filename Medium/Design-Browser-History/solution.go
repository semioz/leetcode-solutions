type BrowserHistory struct {
	curr *LlNode
}

type LlNode struct {
	prev *LlNode
	data string
	next *LlNode
}

func Constructor(homepage string) BrowserHistory {
	head := &LlNode{
		data: homepage,
	}

	return BrowserHistory{
		curr: head,
	}
}

func (this *BrowserHistory) Visit(url string) {
	newNode := &LlNode{data: url}
	this.curr.next = newNode
	newNode.prev = this.curr
	this.curr = newNode
}

func (this *BrowserHistory) Back(steps int) string {
	for this.curr.prev != nil && steps > 0 {
		this.curr = this.curr.prev
		steps--
	}
	return this.curr.data
}

func (this *BrowserHistory) Forward(steps int) string {
	for this.curr.next != nil && steps > 0 {
		this.curr = this.curr.next
		steps--
	}
	return this.curr.data
}