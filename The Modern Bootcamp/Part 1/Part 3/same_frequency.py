#Write a function which accepts two numbers and returns True if they contain the same frequency of digits. Otherwise, it returns False.
def same_frequency(a, b):
    return sorted(str(a)) == sorted(str(b))