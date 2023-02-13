class RandomizedSet {
    constructor() {
        this.vals = [];
        this.valsMap = new Map();
    }
    insert(val) {
        if (this.valsMap.has(val)) return false;
        this.vals.push(val);
        this.valsMap.set(val, this.vals.length - 1);
        return true;
    }
    remove(val) {
        if (!this.valsMap.has(val)) return false;
        let [index, lastElement] = [this.valsMap.get(val), this.vals[this.vals.length - 1]];
        this.vals[index] = lastElement;
        this.valsMap.set(lastElement, index);
        this.valsMap.delete(val);
        this.vals.pop();
        return true;
    }
    getRandom() {
        let index = Math.floor(Math.random() * this.vals.length);
        return this.vals[index];
    }
};