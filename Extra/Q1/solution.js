//Time Complexity - O(1)

class DataStructure {
    constructor() {
        //list to store the elements in order
        this.elements = [];
        //map to support efficient element look-up and removal
        this.elementMap = new Map();
    }
    add(element) {
        //add the element to the end of list
        this.elements.push(element);
        //store the index of the element in the map
        this.elementMap.set(element, this.elements.length - 1);
    }
    remove(element) {
        //get the index of the element
        let indexOfElement = this.elementMap.get(element);
        //remove the element from map
        this.elementMap.delete(element);
        // if the element is not the last element in the list,
        // move the last element in the list to the position of the removed element
        if (indexOfElement < this.elements.length - 1) {
            let lastElement = this.elements[this.elements.length - 1];
            this.elements[indexOfElement] = lastElement;
            this.elementMap.set(lastElement, indexOfElement);
        }
        this.elements.pop();
    }
    getLastInserted() {
        //return the last element in the list
        return this.elements[this.elements.length - 1];
    }
    getRandom() {
        //get a random index between 0 and the length of list
        let index = Math.floor(Math.random() * this.elements.length);
        return this.elements[index];
    }
}

const ds = new DataStructure();
//Add Items
ds.add(1)
ds.add(2)
ds.add(3)
ds.add(4)

//Get The Last Inserted Element
const lastInserted = ds.getLastInserted();
console.log(lastInserted)
    //Get A Random Number
const randomNum = ds.getRandom();
console.log(randomNum);
//Remove Element From List and Map
ds.remove(2);
console.log(ds)