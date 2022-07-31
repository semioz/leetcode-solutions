class Solution(object):
    def fizzBuzz(self, n):
        arr = []
        for i in range(1,n+1):
            div_5 = (i % 5 == 0)
            div_3 = (i % 3 == 0)

            if div_5 and div_3:
                arr.append("FizzBuzz")
            elif div_3:
                arr.append("Fizz")
            elif div_5:
                arr.append("Buzz")
            else:
                arr.append(str(i))
        return arr
                

