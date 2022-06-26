#Write a function which accepts a list and start and end indices, and returns the sum of the values between (and including) the start and end index.
def range_in_list(arr,start=0,end=None):
    end = end or arr[-1]
    if end > len(arr):
        return sum(arr)
    else:
        empty_list = []
        empty_list.append(arr[start:end+1])
        return sum(empty_list[0])