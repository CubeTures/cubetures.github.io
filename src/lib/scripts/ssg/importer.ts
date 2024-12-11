import { getDirName, getFileName } from "./helper";
import type { Glob, ProjectContent, ProjectContentGlob } from "./types";

let markdown: Record<string, ProjectContent> | undefined;
let images: Record<string, Record<string, any>> | undefined;

function importMarkdown() {
	if (markdown === undefined) {
		markdown = {};
		const projects = import.meta.glob<ProjectContentGlob>(
			"/src/lib/data/projects/**/*.md",
			{
				eager: true,
			}
		);

		for (const [path, project] of Object.entries(projects)) {
			const id = getFileName(path, { ".md": "" });
			markdown[id] = {
				metadata: project.metadata,
				content: project.default,
			};
		}
	}
}

function importImages() {
	if (images === undefined) {
		images = {};
		const globs = import.meta.glob<Glob<any>>(
			"/src/lib/data/projects/**/*.{png,jpeg,jpg,webp,gif,tiff,bmp,raw}",
			{ eager: true }
		);

		for (const [path, glob] of Object.entries(globs)) {
			const id = getDirName(path);
			const name = getFileName(path);

			if (images[id] === undefined) {
				images[id] = {};
			}

			images[id][name] = glob.default;
		}
	}
}

export function getMarkdownList(): Record<string, ProjectContent> {
	importMarkdown();

	if (markdown === undefined) {
		throw new Error("Error with importing markdown list");
	}

	return markdown;
}

export function getMarkdown(id: string): ProjectContent {
	importMarkdown();

	if (markdown === undefined) {
		throw new Error(`Error with importing markdown list`);
	} else if (markdown[id] === undefined) {
		console.warn(`Error with importing markdown file ${id} (it may be an image preloading)`);
		return {
			metadata: {},
			content: () => {},
		};
	}

	return markdown[id];
}

export function getImages(id: string): Record<string, any> {
	importImages();

	if (images === undefined) {
		throw new Error("Error with importing images");
	} else if (images[id] === undefined) {
		console.warn(
			`Error with importing images for ${id} (or no images exist)`
		);
		return {};
	}

	return images[id];
}

export function getImage(id: string, name: string): any {
	importImages();

	if (images === undefined) {
		throw new Error("Error with importing images");
	} else if (images[id] === undefined) {
		console.warn(
			`Error with importing images for ${id} (or no images exist)`
		);
		return undefined;
	} else if(images[id][name] === undefined) {
		console.warn(`Error with importing image ${name} for ${id}`)
	}

	return images[id][name];
}
