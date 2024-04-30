import { pick } from "./shuffle";
import crypto from "crypto";

export const randomString = (x: number): string =>
  crypto
    .randomBytes(Math.ceil(x / 2))
    .toString("hex")
    .slice(0, x);

export const randomRange = (
  low: number,
  high: number,
  count: number,
): number[] =>
  pick(
    new Array(high - low).fill(null).map((_, i: number) => low + i),
    count,
  );
