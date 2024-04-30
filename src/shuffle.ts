import { range } from "ramda";
import shuffle from "shuffle-array";

export const pick = <T>(arr: T[], count: number): T[] =>
  count > 0 ? shuffle(arr).slice(0, count) : [];

export const pickOne = <T>(arr: T[]): T => pick(arr, 1)[0] as T;

export const pickTwo = <T>(arr: T[]): [T, T] => pick(arr, 2) as [T, T];

export const pickSome = <T>(arr: T[], max: number): T[] => {
  const count = pickOne(range(0, max - 1));
  return pick(arr, count);
};
