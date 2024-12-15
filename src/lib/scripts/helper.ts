export function capitalize(str: string, separator: string = " "): string {
	return str
		.split(separator)
		.map((s) => s[0].toUpperCase() + s.substring(1))
		.join(" ");
}