import { getImages, getMarkdown, getMarkdownList } from "./importer";
import type { MarkdownContent, ProjectData, ProjectMetadata } from "./types";

export function getProjectList(): ProjectData[] {
	const projects = getMarkdownList("projects");
	return parseGlobs(projects);
}

function parseGlobs(projects: Record<string, MarkdownContent>): ProjectData[] {
	let result: ProjectData[] = [];

	for (const [id, record] of Object.entries(projects)) {
		result.push(parseData(id, record));
	}

	result = result.filter((project) => project.visible !== false);
	result.sort((a, b) => {
		if (a.pinned !== b.pinned) {
			return a.pinned ? -1 : 1;
		}

		return b.date.getTime() - a.date.getTime();
	});

	return result;
}

function parseData(id: string, project: MarkdownContent): ProjectData {
	const metadata = project.metadata as ProjectMetadata;

	if (metadata === undefined) {
		throw new Error(
			`Metadata for ${id} is undefined. Make sure any lists are indented with spaces.`
		);
	}

	return {
		...metadata,
		date: new Date(metadata.date),
		images: getImages("projects", id),
		href: `/projects/${id}`,
	} satisfies ProjectData;
}

export function getProject(id: string): MarkdownContent {
	return getMarkdown("projects", id);
}
