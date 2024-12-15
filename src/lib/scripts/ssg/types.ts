export interface MarkdownContentGlob {
	metadata: any;
	default: any;
}

export interface MarkdownContent {
	metadata: any;
	content: any;
}

export interface MarkdownMetadata {
	group: Groups;
	id: string;
	color: string;
	visible?: boolean; // not published
	exclude?: boolean; // not counted
}

export interface ExperienceMetadata extends MarkdownMetadata, Tags {
	start: Date;
	end?: Date;
	position: string;
	company: string;
	location: string;
	desc: string[];
}

export interface ExperienceData extends ExperienceMetadata {
	href: string;
}

export interface ProjectMetadata extends MarkdownMetadata, Tags, ProjectLinks {
	name: string;
	desc: string;
	date: Date;
	pinned?: boolean;
}

export interface ProjectData extends ProjectMetadata {
	images: Record<string, any>;
	href: string;
}

export interface Glob<T> {
	default: T;
}

export interface Tags {
	/**
	 * 	Software
	 * 		Other (console app, etc.)
	 * 		Game
	 *		Full Stack
	 *			Web
	 *			Desktop
	 *			Mobile
	 *			Cloud
	 */
	category: Exclude<Category, "software">;

	// java, go, haskell
	languages?: string[];

	// react, svelte
	frameworks?: string[];

	// unovis, numpy
	libraries?: string[];

	// aws, firebase, linux
	platforms?: string[];

	// git, docker, vscode
	tools?: string[];

	// anything that doesn't fall into the above; soft skills
	other?: string[];
}

export interface NumeratedTags {
	category?: Record<string, number>;
	languages?: Record<string, number>;
	frameworks?: Record<string, number>;
	libraries?: Record<string, number>;
	platforms?: Record<string, number>;
	tools?: Record<string, number>;
	other?: Record<string, number>;
}

export type Category =
	| "software"
	| "full-stack"
	| "web"
	| "mobile"
	| "desktop"
	| "cloud"
	| "game"
	| "other";

export interface ProjectLinks {
	github?: string;
	live?: string;
}

export type Groups = "experience" | "projects" | "highlights";

export type MarkdownImport = Record<Groups, Record<string, MarkdownContent>>;
export type ImagesImport = Record<Groups, Record<string, Record<string, any>>>;
