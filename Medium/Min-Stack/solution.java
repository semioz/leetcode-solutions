class MyStack<T> {
    private int L;
    private Node head;

    private class Node {
        T data;
        Node next;
    };

    public void push(T data)  {
        Node temp = head;
        head = new Node();
        head.data = data;
        head.next = temp;
        L++;
    };
    
    public T pop() {
        T prevData = head.data;
        head = head.next;
        L--;
        return prevData;
    };

    public boolean isEmpty() {
        return head == null;
    }

    public T peek() {
        return head.data;
    }
}

class MinStack {
    private MyStack<Integer> mainStack;
    private MyStack<Integer> minStack;

    public MinStack() {
        mainStack = new MyStack<>();
        minStack = new MyStack<>();     
    }
    
    public void push(int val) {
        mainStack.push(val);

        val = Math.min(val, minStack.isEmpty() ? val : minStack.peek());
        minStack.push(val);
    }
    
    public void pop() {
        mainStack.pop();
        minStack.pop();
    }
    
    public int top() {
        return mainStack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */