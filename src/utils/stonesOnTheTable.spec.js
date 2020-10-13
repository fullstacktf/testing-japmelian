import getNumbersOfStonesToRemove from "./stonesOnTheTable";

describe("numberOfStones", () => {
    let stone;

    it("no stones to remove", () => {
        stone = "RGBRGB";
        expect(getNumbersOfStonesToRemove(stone)).toEqual(0);
    })

    it("should remove 3 stones", () => {
        stone = "RRGGBB";
        expect(getNumbersOfStonesToRemove(stone)).toEqual(3);
    })

    it("should remove 4 stones", () => {
        stone = "BGRBBGGBRRR";
        expect(getNumbersOfStonesToRemove(stone)).toEqual(4);
    })

    it("should remove 7 stones", () => {
        stone = "GBRGGRBBBBRRGGGB";
        expect(getNumbersOfStonesToRemove(stone)).toEqual(7);
    })

    it("should remove 9 stones", () => {
        stone = "RRRRGGGGBBBB";
        expect(getNumbersOfStonesToRemove(stone)).toEqual(9);
    })
})
