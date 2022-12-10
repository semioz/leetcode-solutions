import random
class RandomizedSet:
    def __init__(self):
        self.vals = []
        self.vals_map = {}
    def insert(self,val):
        if val in self.vals:
            return False
        self.vals.append(val)
        self.vals_map[val] = len(self.vals-1)
        return True
    def remove(self,val):
        if val not in self.vals:
            return False
        index,lastElement = self.vals_map[val],self.vals[-1]
        self.vals[index] = lastElement
        self.vals_map[lastElement] = index
        del self.vals_map[val]
        self.vals.pop()
        return True
    def getRandom(self):
        return self.vals[random.randint(0,len(self.vals)-1)]
