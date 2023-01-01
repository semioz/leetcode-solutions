class Vehicle:
    color = "white"
    def __init__(self,name,max_speed,mileage,capacity):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage
        self.capacity = capacity

    def fare(self):
        return self.capacity