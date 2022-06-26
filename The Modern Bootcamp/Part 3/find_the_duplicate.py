#Write a function which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or None if there are no duplicates.

def find_the_duplicate(arr):
    for num in arr:
        if arr.count(num) > 1:
            return num