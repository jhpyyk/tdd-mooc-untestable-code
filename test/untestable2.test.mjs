import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll } from "../src/untestable2_copy.ts";

describe("Untestable 2: a dice game", () => {
	test("diceRoll returns 1 on rand(0.0)", () => {
		const rand = () => {
			return 0.0;
		};
		expect(diceRoll(rand)).to.equals(1);
	});
	test("diceRoll returns 6 on rand(0.99)", () => {
		const rand = () => {
			return 0.99;
		};
		expect(diceRoll(rand)).to.equals(6);
	});
	test("diceRoll works with Math.random", () => {
		expect(diceRoll(Math.random)).to.be.a("number")
	})
	test("diceHandValue for 1, 4 is 4", () => {
		expect(diceHandValue(1, 4)).to.equals(4)
	})
	test("diceHandValue for 4, 4 is 4", () => {
		expect(diceHandValue(4, 4)).to.equals(104)
	})
});
