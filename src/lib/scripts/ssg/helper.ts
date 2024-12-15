import type { Groups } from "./types";

export function getFileName(
	path: string,
	removeExtensions?: boolean,
	replaceExtensions?: Record<string, string>
): string {
	let name = path.split("/").at(-1);

	if (name === undefined) {
		throw new Error(`Failed to get file name of invalid path ${path}`);
	}

	if (removeExtensions) {
		name = name.substring(0, name.indexOf("."));
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

export function getGroupName(path: string): Groups {
	const dirPath = path.substring(0, path.lastIndexOf("/"));
	const groupPath = dirPath.substring(0, dirPath.lastIndexOf("/"));
	const group = groupPath.substring(groupPath.lastIndexOf("/") + 1);
	return group as Groups;
}
