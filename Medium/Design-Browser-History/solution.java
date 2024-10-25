class LlNode {
    LlNode prev;
    String data;
    LlNode next;

    public LlNode(String data) {
        this.data = data;
        prev = next = null;
    }
}

class BrowserHistory {
    LlNode head;
    LlNode curr;

    public BrowserHistory(String homepage) {
        head = new LlNode(homepage);
        curr = head;
    }
    
    public void visit(String url) {
        curr.next = new LlNode(url);
        curr.next.prev = curr;
        curr = curr.next;
    }
    
    public String back(int steps) {
        while (curr.prev != null && steps > 0) { 
            curr = curr.prev;
            steps--;
        }
        return curr.data;
    }
    
    public String forward(int steps) {
        while (curr.next != null && steps > 0) { 
            curr = curr.next;
            steps--;
        }
        return curr.data;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */