from random import randint

class DataStructure:
    def __init__(self):
        self.elements = []
        self.elementsMap = {}
    
    def add(self,element):
        self.elements.append(element)
        self.elementsMap[element] = len(self.elements)-1

    def remove(self,element):
        index = self.elementsMap[element]
        del self.elementsMap[element]

        if index < len(self.elements)-1:
            last_element = self.elements[-1]
            self.elements[index] = last_element
            self.elementsMap[last_element] = index
        self.elements.pop()

    def getLastInserted(self):
        return self.elements[-1]

    def getRandom(self):
        random_num = randint(0,len(self.elements)-1)
        return self.elements[random_num]