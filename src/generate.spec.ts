import { randomRange, randomString } from "./generate";
import { range } from "ramda";

describe("randomString", () => {
  it("generates a fixed size random hexadecimal string", () => {
    range(0, 10).forEach((length) => {
      expect(randomString(length)).toHaveLength(length);
    });
  });
});

describe("randomRange", () => {
  it("generates a fixed size random selection of numbers in a range without repeats", () => {
    range(0, 10).forEach((length) => {
      const arr = randomRange(0, 10, length);
      expect(arr).toHaveLength(length);

      arr.forEach((i) => {
        expect(i).toBeGreaterThanOrEqual(0);
        expect(i).toBeLessThan(10);
      });
    });
  });
});
