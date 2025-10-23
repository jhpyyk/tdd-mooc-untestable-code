import { readFile } from "node:fs/promises"
//import * as fs from 'fs';
import { parse } from "csv-parse/sync";


// this is hard to test because the function reads from the filesystem
//
// reading the file should be its own operation and separate from the mapping

export const readFromDisk = async (path: string) => {
	const file = await readFile(path, { encoding: "utf8" })
	return file
}

export async function parsePeopleCsv(filePath: string) {
	const csvData = await readFromDisk(filePath);
	const records = parse(csvData, {
		skip_empty_lines: true,
		trim: true,
	});
	return records.map(([firstName, lastName, age, gender]) => {
		const person = {
			firstName,
			lastName,
			gender: gender.charAt(0).toLowerCase(),
			age: parseInt(age) ?? undefined
		};
		if (age !== "") {
			person.age = parseInt(age);
		}
		return person;
	});
}
