//Time Complexity - O(1)

class DataStructure {
    constructor() {
        this.elements = [];
        this.elementMap = new Map();
    }
    add(element) {
        this.elements.push(element);
        this.elementMap.set(element, this.elements.length - 1);
    }
    remove(element) {
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
        let index = Math.floor(Math.random() * this.elements.length);
        return this.elements[index];
    }
}

export default DataStructure;