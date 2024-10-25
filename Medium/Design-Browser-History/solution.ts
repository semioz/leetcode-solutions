class LlNode {
    data: string;
    prev: LlNode | null;
    next: LlNode | null;

    constructor(data: string, prev: LlNode | null = null, next: LlNode | null = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    private current: LlNode;

    constructor(homepage: string) {
        this.current = new LlNode(homepage);
    };

    visit(url: string): void {
        this.current.next = new LlNode(url, this.current);
        this.current = this.current.next;
    }

    back(steps: number): string {
        while (this.current.prev && steps > 0) {
            this.current = this.current.prev;
            steps --;
        }
        return this.current.data;
    }

    forward(steps: number): string {
        while (this.current.next && steps > 0) {
            this.current = this.current.next;
            steps --;
        }
        return this.current.data;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */