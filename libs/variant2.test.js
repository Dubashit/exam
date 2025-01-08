const {
    isRange,
    isIndex,
    isBoolean,
    isResultSet,
    isHelp,
    isFunction,
    isDate,
    isRegExp,
    isObject,
    isNull
} = require("../libs/variant2");

jest.mock("../libs/variant1", () => ({
    isComplex: jest.fn(),
    isFraction: jest.fn()
}));

const { isComplex, isFraction } = require("../libs/variant1");

describe("variant2.js utilities", () => {
    test("isRange should identify objects with isRange prototype", () => {
        const mockRange = { constructor: { prototype: { isRange: true } } };
        expect(isRange(mockRange)).toBe(true);
        expect(isRange({})).toBe(false);
    });

    test("isIndex should identify objects with isIndex prototype", () => {
        const mockIndex = { constructor: { prototype: { isIndex: true } } };
        expect(isIndex(mockIndex)).toBe(true);
        expect(isIndex({})).toBe(false);
    });

    test("isBoolean should correctly identify boolean values", () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean("true")).toBe(false);
    });

    test("isResultSet should identify objects with isResultSet prototype", () => {
        const mockResultSet = { constructor: { prototype: { isResultSet: true } } };
        expect(isResultSet(mockResultSet)).toBe(true);
        expect(isResultSet({})).toBe(false);
    });

    test("isHelp should identify objects with isHelp prototype", () => {
        const mockHelp = { constructor: { prototype: { isHelp: true } } };
        expect(isHelp(mockHelp)).toBe(true);
        expect(isHelp({})).toBe(false);
    });

    test("isFunction should correctly identify functions", () => {
        expect(isFunction(() => { })).toBe(true);
        expect(isFunction(function () { })).toBe(true);
        expect(isFunction(null)).toBe(false);
        expect(isFunction({})).toBe(false);
    });

    test("isDate should correctly identify Date objects", () => {
        expect(isDate(new Date())).toBe(true);
        expect(isDate("2025-01-08")).toBe(false);
        expect(isDate({})).toBe(false);
    });

    test("isRegExp should correctly identify RegExp objects", () => {
        expect(isRegExp(/test/)).toBe(true);
        expect(isRegExp(new RegExp("test"))).toBe(true);
        expect(isRegExp("test")).toBe(false);
    });

    test("isObject should identify plain objects and exclude others", () => {
        isComplex.mockReturnValue(false);
        isFraction.mockReturnValue(false);

        expect(isObject({})).toBe(true);
        expect(isObject(new Date())).toBe(false);
        expect(isObject([])).toBe(false);
        expect(isObject(null)).toBe(false);

        isComplex.mockReturnValue(true);
        expect(isObject({})).toBe(false);
        isComplex.mockReturnValue(false);
        isFraction.mockReturnValue(true);
        expect(isObject({})).toBe(false);
    });

    test("isNull should correctly identify null values", () => {
        expect(isNull(null)).toBe(true);
        expect(isNull(undefined)).toBe(false);
        expect(isNull(0)).toBe(false);
        expect(isNull({})).toBe(false);
    });
});