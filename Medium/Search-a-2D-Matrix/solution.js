let searchMatrix = function(matrix, target) {
    let [rows, cols] = [matrix.length, matrix[0].length];
    let [top, bot] = [0, cols - 1];
    while (top <= bot) {
        let mid = Math.round((top + bot) / 2);
        if (target > matrix[mid][cols - 1]) top = mid + 1;
        else if (target < matrix[mid][0]) bot = mid - 1;
        else break
    };
    if (!(top <= bot)) return false
    let mid = Math.round((top + bot) / 2);
    let [l, r] = [0, cols - 1];
    while (l <= r) {
        let newMid = Math.round((l + r) / 2);
        if (target > matrix[mid][newMid]) l = newMid + 1;
        else if (target < matrix[mid][newMid]) r = newMid - 1;
        else return true
    }
    return false
}