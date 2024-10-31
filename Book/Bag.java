import java.util.Iterator;

public class Bag<Item> implements Iterable<Item> {
    private Node head;

    // same push logic with the stack
    public void add(Item item) {
        Node temp = head;
        head = new Node();
        head.data = item;
        head.next = temp;
    }

    public Iterator<Item> iterator() {
        return new ListIterator();
    }

    private class ListIterator implements Iterator<Item> {
        private Node current = head;

        public boolean hasNext() {
            return current != null;
        }

        public Item next() {
            Item data = current.data;
            current = current.next;
            return data;
        }
    }
}