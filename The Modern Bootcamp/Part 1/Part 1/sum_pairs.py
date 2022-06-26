 #Write a function which accepts a list and a number and returns the first pair of numbers that sum to the number passed to the function.

def sum_pairs(element,number):
    num_element = len(element)
    if sum(element) < number:
        return ([])
    else:
        for i in range(0,num_element):
            for a in range(i+1,num_element):
                if element[i] + element[a] == number:
                    return ([element[i],element[a]])


