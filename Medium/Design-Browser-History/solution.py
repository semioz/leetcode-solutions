class LlNode:
    def __init__(self, data, prev=None, next=None):
        self.data = data
        self.prev = prev
        self.next = next

class BrowserHistory:

    def __init__(self, homepage: str):
        self.current = LlNode(homepage)        

    def visit(self, url: str) -> None:
        self.current.next = LlNode(url, self.current)
        self.current = self.current.next

    def back(self, steps: int) -> str:
        while self.current.prev and steps > 0:
            self.current = self.current.prev
            steps -= 1
        return self.current.data

    def forward(self, steps: int) -> str:
        while self.current.next and steps > 0:
            self.current = self.current.next
            steps -= 1
        return self.current.data