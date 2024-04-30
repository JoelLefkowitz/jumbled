import { pick, pickOne, pickSome, pickTwo } from "./shuffle";
import { range } from "ramda";

const chars = range(0, 100).map((i) => String.fromCharCode(i));

describe("pick", () => {
  it("picks a fixed size random selection from an array without repeats", () => {
    range(0, 10).forEach((length) => {
      const arr = pick(chars, length);
      expect(arr).toHaveLength(length);

      arr.forEach((i) => {
        expect(chars.includes(i)).toBeTruthy();
      });
    });
  });
});

describe("pickOne", () => {
  it("picks a random element from an array", () => {
    range(0, 10).forEach(() => {
      const char = pickOne(chars);
      expect(chars.includes(char)).toBeTruthy();
    });
  });
});

describe("pickTwo", () => {
  it("picks a random pair of elements from an array without repeats", () => {
    range(0, 10).forEach(() => {
      const pair = pickTwo(chars);
      expect(pair).toHaveLength(2);

      pair.forEach((i) => {
        expect(chars.includes(i)).toBeTruthy();
      });
    });
  });
});

describe("pickSome", () => {
  it("picks a random selection up to a maximum size from an array without repeats", () => {
    range(0, 10).forEach((length) => {
      const arr = pickSome(chars, length);
      expect(arr.length).toBeLessThanOrEqual(length);

      arr.forEach((i) => {
        expect(chars.includes(i)).toBeTruthy();
      });
    });
  });
});
