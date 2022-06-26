#Wrie a function which accepts a list and returns True if each value in the list is a list. Otherwise the function should return False.

def list_check(example):
    return all(type(i) is list for i in example)

