#Write a function which accepts a number and returns a list of all of the numbers which are divisible by starting from 1 and going to the number.

def find_factors(num):
    return [i for i in range(1,num+1) if num % i == 0 ]

