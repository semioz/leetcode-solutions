import random
#Time Complexity - O(1)
class DataStructure:
    def __init__(self):
        #list to store the elements
        self.elements = []
        #dictionary to support efficient element look-up and removal
        self.element_map = {}
    def add(self,element):
        self.elements.append(element)
        self.element_map[element] = len(self.elements-1)

    def remove(self,element):
        index = self.element_map[element]
        del self.element_map[element]
        if index < len(self.elements)-1:
            last_element = self.elements[-1]
            self.elements[index] = last_element
            self.element_map[last_element] = index
        self.elements.pop()

    def last_inserted(self):
        return self.elements[-1]

    def random_element(self):
        random_num = random.randint(0,len(self.elements)-1)
        return self.elements[random_num]