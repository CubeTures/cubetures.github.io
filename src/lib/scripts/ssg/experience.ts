import { getMarkdown, getMarkdownList } from "./importer";
import type {
	ExperienceData,
	ExperienceMetadata,
	MarkdownContent,
} from "./types";

export function getExperienceList(): ExperienceData[] {
	const experience = getMarkdownList("experience");
	return parseGlobs(experience);
}

function parseGlobs(
	experience: Record<string, MarkdownContent>
): ExperienceData[] {
	let result: ExperienceData[] = [];

	for (const [id, record] of Object.entries(experience)) {
		result.push(parseData(id, record));
	}

	result = result.filter((exp) => exp.visible !== false);
	result.sort((a, b) => {
		if (b.end === undefined && a.end === undefined) {
			return b.start.getTime() - a.start.getTime();
		} else if (b.end === undefined) {
			return 1;
		} else if (a.end === undefined) {
			return -1;
		}

		return b.end.getTime() - a.end.getTime();
	});

	return result;
}

function parseData(id: string, experience: MarkdownContent): ExperienceData {
	const metadata = experience.metadata as ExperienceMetadata;

	if (metadata === undefined) {
		throw new Error(
			`Metadata for ${id} is undefined. Make sure any lists are indented with spaces.`
		);
	}

	return {
		...metadata,
		start: new Date(metadata.start),
		end: metadata.end ? new Date(metadata.end) : undefined,
		href: `/experience/${id}`,
	} satisfies ExperienceData;
}

export function getExperience(id: string) {
	return getMarkdown("experience", id);
}
