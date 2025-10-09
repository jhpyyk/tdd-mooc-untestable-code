import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1_copy.ts";

describe("Untestable 1: days until Christmas", () => {
  test("should be 24 from December 1st", () => {
    const dec1 = new Date(2000, 12 - 1, 1);
    expect(daysUntilChristmas(dec1)).to.equals(24);
  });
});
