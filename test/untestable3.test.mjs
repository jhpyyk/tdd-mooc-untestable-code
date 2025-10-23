import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, readFromDisk } from "../src/untestable3_copy.ts";

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

});
