export function getFileName(
	path: string,
	replaceExtensions?: Record<string, string>
): string {
	let name = path.split("/").at(-1);

	if (name === undefined) {
		throw new Error(`Failed to get file name of invalid path ${path}`);
	}

	if (replaceExtensions !== undefined) {
		for (const [from, to] of Object.entries(replaceExtensions)) {
			name = name.replaceAll(from, to);
		}
	}

	return name;
}

export function getDirName(path: string) {
	const dirPath = path.substring(0, path.lastIndexOf("/"));
	const dir = dirPath.substring(dirPath.lastIndexOf("/") + 1);
	return dir;
}
