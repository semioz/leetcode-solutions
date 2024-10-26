public class StackLinked<Item> {
    private Node head;
    private int L;

    private class Node {
        Item item;
        Node next;
    }

    public boolean isEmpty() {
        return head == null;
    }

    public int size() {
        return L;
    }

    public void push(Item item) {
        Node prev = head;
        head = new Node();
        head.item = item;
        head.next = prev;
        L++;
    }

    public Item pop() {
        Item item = head.item;
        head = head.next;
        L--;
        return item;
    }
}