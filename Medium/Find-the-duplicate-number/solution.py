# Applying Floyd's Tortoise and Hare (Cycle Detection)
# in order to find the beginning of the cycle

#This uses constant space and linear time - Uses two pointers
class Solution(object):
    def findDuplicate(self, nums):
        slow,fast = 0,0
        while True:
            #Assigning pointers to values they point at
            slow = nums[slow]
            fast = nums[nums[fast]] #fast pointer moves twice as fast as slow pointer
            if slow == fast:
                break
        #Once the cycle is detected, we need to find the beginning of the cycle
        slow2 = 0
        while True:
            slow = nums[slow]
            slow2 = nums[slow2]
            if slow == slow2:
                return slow 
        

