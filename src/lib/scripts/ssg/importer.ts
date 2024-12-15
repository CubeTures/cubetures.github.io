import { getDirName, getFileName, getGroupName } from "./helper";
import type {
	Glob,
	Groups,
	ImagesImport,
	MarkdownContent,
	MarkdownContentGlob,
	MarkdownImport,
} from "./types";

let markdown: MarkdownImport | undefined;
let images: ImagesImport | undefined;

function importMarkdown() {
	if (markdown === undefined) {
		markdown = {
			experience: {},
			projects: {},
			highlights: {},
		};

		const projects = import.meta.glob<MarkdownContentGlob>(
			"/src/lib/data/**/*.{svx, md}",
			{
				eager: true,
			}
		);

		for (const [path, project] of Object.entries(projects)) {
			const group = getGroupName(path);
			const id = getFileName(path, true);

			if (markdown[group] === undefined) {
				markdown[group] = {};
			}

			markdown[group][id] = {
				metadata: project.metadata,
				content: project.default,
			};
		}
	}
}

function importImages() {
	if (images === undefined) {
		images = {
			experience: {},
			projects: {},
			highlights: {},
		};

		const globs = import.meta.glob<Glob<any>>(
			"/src/lib/data/**/*.{png,jpeg,jpg,webp,gif,tiff,bmp,raw}",
			{ eager: true }
		);

		for (const [path, glob] of Object.entries(globs)) {
			const group = getGroupName(path);
			const id = getDirName(path);
			const name = getFileName(path, true);

			if (images[group] === undefined) {
				images[group] = {};
			}

			if (images[group][id] === undefined) {
				images[group][id] = {};
			}

			if (images[group][id][name]) {
				console.error(
					`There are two images with the name ${name} in ${group}/${id}. Please change one.`
				);
			}

			images[group][id][name] = glob.default;
		}
	}
}

export function getMarkdownList(
	group: Groups
): Record<string, MarkdownContent> {
	importMarkdown();

	if (markdown === undefined) {
		throw new Error("Error with importing markdown list");
	}

	return markdown[group];
}

export function getMarkdown(group: Groups, id: string): MarkdownContent {
	const md = getMarkdownList(group);

	if (md === undefined) {
		throw new Error(`Error with importing markdown group ${group}`);
	} else if (md[id] === undefined) {
		console.warn(
			`Error with importing markdown file ${id} group ${group} (it may be an image preloading)`
		);

		return {
			metadata: {},
			content: () => {},
		};
	}

	return md[id];
}

export function getImages(group: Groups, id: string): Record<string, any> {
	importImages();

	if (images === undefined) {
		throw new Error("Error with importing images");
	} else if (images[group] === undefined) {
		throw new Error(`Error with importing image group ${group}`);
	} else if (images[group][id] === undefined) {
		console.warn(
			`Error with importing images for ${id} group ${group} (or no images exist)`
		);

		return {};
	}

	return images[group][id];
}

export function getImage(group: Groups, id: string, name: string): any {
	const imgs = getImages(group, id);

	if (imgs[name] === undefined) {
		console.warn(
			`Error with importing image ${name} for ${id} group ${group}`
		);
	}

	return imgs[name];
}
