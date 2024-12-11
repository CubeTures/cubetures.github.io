import type {
	Glob,
	ProjectContent,
	ProjectData,
	ProjectMetadata,
} from "./types";

export function getProjectList(): ProjectData[] {
	const projects = import.meta.glob<ProjectContent>(
		"/src/lib/data/projects/**/*.md",
		{
			eager: true,
		}
	);

	return parseGlobs(projects);
}

function parseGlobs(projects: Record<string, ProjectContent>): ProjectData[] {
	return Object.entries(projects).map(([path, record]) =>
		parseData(path, record)
	);
}

function parseData(path: string, project: ProjectContent): ProjectData {
	const id = getFileName(path, { ".md": "" });
	const metadata = project.metadata satisfies ProjectMetadata;

	if (id === undefined) {
		throw new Error(`${path} is an invalid project.`);
	}

	return {
		...metadata,
		images: resolveImages(id),
		href: `/projects/${id}`,
	} satisfies ProjectData;
}

function resolveImages(id: string): string[] {
	const images = import.meta.glob<Glob<any>>(
		"/src/lib/data/projects/**/*.{png,jpeg,jpg,webp,gif,tiff,bmp,raw}",
		{ eager: true }
	);

	let result: string[] = [];
	for (const [path, glob] of Object.entries(images)) {
		const dirPath = path.substring(0, path.lastIndexOf("/"));
		const dir = dirPath.substring(dirPath.lastIndexOf("/") + 1);

		if (dir === id) {
			result.push(glob.default);
		}
	}

	return result;
}

export async function getProject(id: string): Promise<ProjectContent> {
	const file = await import(`../../data/projects/${id}/${id}.md`);

	return {
		metadata: file.metadata,
		content: file.default,
	};
}

function getFileName(
	path: string,
	replaceExtensions?: Record<string, string>
): string {
	let name = path.split("/").at(-1);

	if (name === undefined) {
		throw new Error("File name undefined for path " + path);
	}

	if (replaceExtensions !== undefined) {
		for (const [from, to] of Object.entries(replaceExtensions)) {
			name = name.replaceAll(from, to);
		}
	}

	return name;
}
