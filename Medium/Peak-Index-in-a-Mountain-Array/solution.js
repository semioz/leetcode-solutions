var peakIndexInMountainArray = function(arr) {
    let [l, r] = [0, arr.length - 1];
    while (l <= r) {
        let mid = Math.round((r + l) / 2);
        if (arr[mid] == arr[mid + 1]) return mid;
        else if (arr[mid] < arr[mid + 1]) l = mid + 1;
        else if (arr[mid] > arr[mid + 1]) r = mid - 1;
    }
    return l;
};