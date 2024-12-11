import type {
	Glob,
	ProjectContent,
	ProjectData,
	ProjectMetadata,
} from "./types";

export function getProjectList(): ProjectData[] {
	const projects = import.meta.glob<Glob<ProjectMetadata>>(
		"/src/lib/data/projects/**/meta.json",
		{
			eager: true,
		}
	);

	return parseGlobs(projects);
}

function parseGlobs(
	projects: Record<string, Glob<ProjectMetadata>>
): ProjectData[] {
	return Object.entries(projects).map(([path, record]) =>
		parseData(path, record)
	);
}

function parseData(path: string, glob: Glob<ProjectMetadata>): ProjectData {
	const dir: string = path.substring(0, path.lastIndexOf("/"));
	const id: string = dir.substring(dir.lastIndexOf("/") + 1);

	return {
		images: `${dir}/images`,
		markdown: `${dir}/${id}.md`,
		page: `/projects/${id}`,
		...glob.default,
	};
}

export async function getProject(id: string): Promise<ProjectContent> {
	const file = await import(`../../data/projects/${id}/${id}.md`);

	return {
		metadata: file.metadata,
		content: file.default,
	};
}
