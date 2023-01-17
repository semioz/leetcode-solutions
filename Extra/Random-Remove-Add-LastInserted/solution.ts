class DataStructure {
    elements:any[];
    elementsMap:any = Map;
    constructor() {
        this.elements = [];
        this.elementsMap = new Map();
    }
    
    add(element){
        this.elements.push(element);
    }
}