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
export const csvRowToPerson = (row: string) => {
	const age = parseInt(row[2]) ?? undefined
	const person = {
		firstName: row[0],
		lastName: row[1],
		gender: row[3],
		age: age
	}
	return person
}



export async function parsePeopleCsv(filePath: string) {
	const csvData = await readFromDisk(filePath);
	const records = parse(csvData, {
		skip_empty_lines: true,
		trim: true,
	});
	const persons = records.map(row => csvRowToPerson(row))
	return persons
}
