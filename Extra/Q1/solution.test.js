import DataStructure from "./solution";
import { it, describe, expect, isFirstRun } from "vitest";

describe("test the data structure", () => {
    it("should add elements into array", () => {
        let ds = new DataStructure();
        for (let i = 0; i < 5; i++) {
            ds.add(i);
        }
        expect(ds.elements).toEqual([0, 1, 2, 3, 4]);
    });

    it("should get the last inserted element from the array", () => {
        let ds = new DataStructure();
        for (let i = 0; i < 7; i++) {
            ds.add(i);
        }
        let res = ds.getLastInserted();
        expect(res).toBe(6)
    })
    it("should get a random element from the array", () => {
        let ds = new DataStructure();
        for (let i = 0; i < 7; i++) {
            ds.add(i);
        }
        let res = ds.getRandom();
        expect(res).toBeCalled;
    })
});