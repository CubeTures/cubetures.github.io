import { getDirName, getFileName } from "./helper";
import { getImages, getMarkdown, getMarkdownList } from "./importer";
import type {
	Glob,
	ProjectContent,
	ProjectData,
	ProjectMetadata,
} from "./types";

export function getProjectList(): ProjectData[] {
	const projects = getMarkdownList();
	return parseGlobs(projects);
}

function parseGlobs(projects: Record<string, ProjectContent>): ProjectData[] {
	let result: ProjectData[] = [];

	for (const [id, record] of Object.entries(projects)) {
		result.push(parseData(id, record));
	}

	result.sort((a, b) => {
		if (a.pinned !== b.pinned) {
			return a.pinned ? -1 : 1;
		}

		return b.date.getTime() - a.date.getTime();
	});

	return result;
}

function parseData(id: string, project: ProjectContent): ProjectData {
	const metadata = project.metadata as ProjectMetadata;

	if (metadata === undefined) {
		throw new Error(
			`Metadata for ${id} is undefined. Make sure any lists are indented with spaces.`
		);
	}

	return {
		...metadata,
		date: new Date(metadata.date),
		images: getImages(id),
		href: `/projects/${id}`,
	} satisfies ProjectData;
}

export function getProject(id: string): ProjectContent {
	return getMarkdown(id);
}
