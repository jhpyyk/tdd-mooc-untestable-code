import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll } from "../src/untestable2_copy.ts";

describe("Untestable 2: a dice game", () => {
	test("todo", () => {
		// TODO: write proper tests
		expect(diceHandValue()).to.be.a("number");
	});
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
});
