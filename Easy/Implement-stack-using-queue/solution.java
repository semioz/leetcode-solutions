class MyStack {
    Deque<Integer> d;

    public MyStack() {
        this.d = new ArrayDeque<>();
    };

    public void push(int x) {
        this.d.addLast(x);
    };
    
    // shift all elements in a way that places the last element at the front of the deque
    public int pop() {
        int size = this.d.size();
        for(int i = 0; i < size-1; i++) {
            this.push(this.d.pollFirst());
        } 
        return this.d.pollFirst();
    }
    
    public int top() { 
        int size = this.d.size();
        for(int i = 0; i < size-1; i++) {
            this.push(this.d.pollFirst());
        }
        int topElement = this.d.peekFirst();
        this.push(this.d.pollFirst());
        return topElement;
    }
    
    public boolean empty() {
        return this.d.size() == 0;
    }
}