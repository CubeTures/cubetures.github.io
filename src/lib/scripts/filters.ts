import {
	categories,
	type Category,
	type ExperienceData,
	type MarkdownMetadata,
	type ProjectData,
	type Tags,
} from "./ssg/types";

export function filterList<T extends Tags>(
	category: Category,
	list?: T[]
): T[] {
	const allowed = allowList(category);

	let result: T[] = [];

	if (list) {
		for (const l of list) {
			for (const cat of l.categories) {
				if (allowed.includes(cat)) {
					result.push(l);
					break;
				}
			}
		}
	}

	return result;
}

export function filterData(
	category: Category,
	data: {
		experience?: ExperienceData[];
		projects?: ProjectData[];
	}
): {
	experience?: ExperienceData[];
	projects?: ProjectData[];
} {
	return {
		experience: filterList(category, data.experience),
		projects: filterList(category, data.projects),
	};
}

function allowList(category: Category): Category[] {
	switch (category) {
		case "software":
			return categories;
		case "full-stack":
			return ["full-stack", "web", "mobile", "desktop", "cloud"];
		case "web":
			return ["web"];
		case "mobile":
			return ["mobile"];
		case "desktop":
			return ["desktop"];
		case "cloud":
			return ["cloud"];
		case "game":
			return ["game"];
		case "other":
			return ["other"];
	}
}

export function flattenData(data: {
	experience?: ExperienceData[];
	projects?: ProjectData[];
}): MarkdownMetadata[] {
	let result: MarkdownMetadata[] = [];

	if (data.experience) {
		for (const e of data.experience) {
			result.push(e);
		}
	}

	if (data.projects) {
		for (const p of data.projects) {
			result.push(p);
		}
	}

	return result;
}
