import { describe, test } from "vitest";
import { expect } from "chai";
import { csvRowToPerson, parsePeopleCsv, readFromDisk } from "../src/untestable3_copy.ts";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Untestable 3: CSV file parsing", () => {
	const peopleCsvPath = "test/test_io_files/people.csv"
	test("read a file from disk", async () => {
		expect(await readFromDisk(peopleCsvPath)).to.deep.equal(
			"Loid,Forger,,Male\nAnya,Forger,6,Female\nYor,Forger,27,Female\n"
		);
	});
	test("convert person csv row to person object", () => {
		expect(csvRowToPerson(["Yor", "Forger", "27", "Female"])).to.deep.equal(
			{
				firstName: "Yor",
				lastName: "Forger",
				gender: "Female",
				age: 27
			}
		);
	});
	test("parse persons from a csv file", async () => {
		expect(await parsePeopleCsv(peopleCsvPath)).to.deep.equal([

			{
				firstName: "Loid",
				lastName: "Forger",
				gender: "Male",
				age: undefined
			},
			{
				firstName: "Anya",
				lastName: "Forger",
				gender: "Female",
				age: 6
			},
			{
				firstName: "Yor",
				lastName: "Forger",
				gender: "Female",
				age: 27
			},
		])
	})
});
