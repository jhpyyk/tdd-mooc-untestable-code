import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1_copy.ts";

describe("Untestable 1: days until Christmas", () => {
  test("should be 24 from December 1st", () => {
    const dec1 = new Date(2000, 12 - 1, 1);
    expect(daysUntilChristmas(dec1)).to.equals(24);
  });

  test("should be 24 + 30 = 54 from November 1st", () => {
    const nov1 = new Date(2000, 11 - 1, 1);
    expect(daysUntilChristmas(nov1)).to.equals(54);
  });

  test("should be 0 from December 25 when", () => {
    const dec25 = new Date(2000, 12 - 1, 25);
    expect(daysUntilChristmas(dec25)).to.equals(0);
  });
});
