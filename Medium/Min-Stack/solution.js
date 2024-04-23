class MinStack {
    constructor() {
        this.mainStack = [];
        this.minStack = [];
    }

    push(val) {
        this.mainStack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.mainStack.length > 0) {
            const top = this.mainStack.pop();
            if (top === this.minStack[this.minStack.length - 1]) {
                this.minStack.pop();
            }
        }
    }

    top() {
        return this.mainStack.length > 0 ? this.mainStack[this.mainStack.length - 1] : 0;
    }

    getMin() {
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : 0;
    }
}