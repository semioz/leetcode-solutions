public class StackNormal<T> {
   private T[] stack;
   private int L = 0;

   public StackNormal(int cap) {
      stack = (T[]) new Object[cap];
   }

   public boolean isEmpty() {
      return L == 0;
   };

   public int size() {
      return L;
   }

   public void push(T data) {
      if (L == stack.length) {
         resize(2 * stack.length);
      }
      stack[L++] = data;
   }

   public T pop() {
      T item = stack[L--];
      stack[L] = null; // avoid loitering from garbage collector
      if (L > 0 && L == stack.length / 4) {
         resize(stack.length / 2);
      }
      return item;
   };

   private void resize(int max) {
      T[] temp = (T[]) new Object[max];
      for (int i = 0; i < L; i++) {
         temp[i] = stack[i];
      }
      stack = temp;
   }
}