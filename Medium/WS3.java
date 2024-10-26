public class Worksheet3 {
        public static int max(Node<Integer> node) {
            if (node == null) {
                return 0;
            }

            Node<Integer> current = node;
            int maxVal = node.data;

            while (current != null) {
                if (current.data > maxVal) {
                    maxVal = current.data;
                }
                current = current.next;
            }
            return maxVal;
        };

        public static int maxRecursive(Node<Integer> node) { 
            if (node == null) {
                return 0;
            }

            int maxVal = node.data;

            if (node.next != null) {
                int nextMax = maxRecursive(node.next);
                if (nextMax > maxVal) {
                    maxVal = nextMax;
                }
            }
            return maxVal;
        }

        public static void remove(LinkedList<String> list, String key) {
            if (list == null || key == null) {
                return;
            }

            Node<String> curr = list.getHead();
            while (list.getHead() != null && list.getHead().data.equals(key)) {
            list.setHead(list.getHead().next);
            }

            while (curr != null && curr.next != null) {
                if (curr.next.data.equals(key)) {
                    curr.next = curr.next.next;
                } else {
                    curr = curr.next;
                }
            }
        }

        public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        list.add("one");
        list.add("two");
        list.add("three");
        // Using the iterator to traverse the list
        LinkedList<String>.LinkedListIterator iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
            iterator = list.iterator(); // Reset the iterator 
            while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
