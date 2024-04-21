type MinStack struct {
	mainStack []int
	minStack  []int
}

func Constructor() MinStack {
	return MinStack{
		mainStack: make([]int, 0),
		minStack:  make([]int, 0),
	}
}

func (this *MinStack) Push(val int) {
	this.mainStack = append(this.mainStack, val)
	if len(this.minStack) == 0 || val <= this.minStack[len(this.minStack)-1] {
		this.minStack = append(this.minStack, val)
	}
}

func (this *MinStack) Pop() {
	if len(this.mainStack) > 0 {
		top := this.mainStack[len(this.mainStack)-1]
		this.mainStack = this.mainStack[:len(this.mainStack)-1]
		if top == this.minStack[len(this.minStack)-1] {
			this.minStack = this.minStack[:len(this.minStack)-1]
		}
	}
}

func (this *MinStack) Top() int {
	if len(this.mainStack) > 0 {
		return this.mainStack[len(this.mainStack)-1]
	}
	return 0
}

func (this *MinStack) GetMin() int {
	if len(this.minStack) > 0 {
		return this.minStack[len(this.minStack)-1]
	}
	return 0
}
