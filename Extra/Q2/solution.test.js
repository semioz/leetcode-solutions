import { describe, it, expect } from "vitest";
import without from "./solution"

describe("lodash's 'without function'", () => {
    it("integer test", () => {
        let arr = [2, 1, 2, 3];
        let [v2, v3] = [1, 2];
        let res = without(arr, v2, v3);
        expect(res).toEqual([3]);
    })

    it("should return the array itself if provided arguments are not in the array", () => {
        let arr = [1, 2, 3, 4, 5, 5, 7, 7];
        let [v1, v2] = [9, 11];
        let res = without(arr, v1, v2);
        expect(res).toEqual(arr);
    })

    it("string test", () => {
        let arr = ["semih", "türkiye", "vscode", "github"];
        let [ar1, ar2, ar3] = ["semih", "git", "vscode"];
        let res = without(arr, ar1, ar2, ar3);
        expect(res).toEqual(["türkiye", "github"]);
    })

    it("mixed values test", () => {
        let arr = [true, "semih", 23, "vscode", "lodash", false, 32];
        let [val1, val2, val3, val4, val5] = [false, "github", "vscode", "23", 32];
        let res = without(arr, val1, val2, val3, val4, val5);
        expect(res).toEqual([true, "semih", 23, "lodash"]);
    })
});