import { readFile } from "node:fs/promises"
import { parse } from "csv-parse/sync";


export const readFromDisk = async (path: string) => {
	const file = await readFile(path, { encoding: "utf8" })
	return file
}
export const csvRowToPerson = (row: string) => {
	let age: number | undefined = parseInt(row[2])
	if (Number.isNaN(age)) {
		age = undefined
	}
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
