// O(1) space complexity - O(n) time complexity
class Solution {
    public int arrangeCoins(int n) {
        int r = 0;
        for (int i = 1; i <= n; i++) {
            n -= i;
            if (n >= 0) {
                r += 1;
            }
        }
        return r;
    }
}

class SolutionV2 {
    public int arrangeCoins(int n) {
        
        int rows = 0;
        long left = 1;
        long right = n;
        while (left <= right) {

            int mid = (int) ((left + right) / 2);
            long coins = (long) ((mid / 2.0) * (mid + 1));
            if (coins > n) {
                right = mid - 1;
            } else {
                rows = Math.max(rows, mid);
                left = mid + 1;
            }
            
        }

        return rows;
    }
}

