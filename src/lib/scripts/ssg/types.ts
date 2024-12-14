export interface MarkdownContentGlob {
	metadata: any;
	default: any;
}

export interface MarkdownContent {
	metadata: any;
	content: any;
}

export type ExperienceMetadata = {
	start: Date;
	end?: Date;
	position: string;
	company: string;
	location: string;
	desc: string[];
	color: string;
	visible?: boolean;
} & Tags;

export type ExperienceData = {
	href: string;
} & ExperienceMetadata;

export type ProjectMetadata = {
	name: string;
	desc: string;
	date: Date;
	color: string;
	pinned?: boolean;
	visible?: boolean;
} & Tags &
	ProjectLinks;

export type ProjectData = {
	images: Record<string, any>;
	href: string;
} & ProjectMetadata;

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
	category:
		| "full-stack"
		| "web"
		| "mobile"
		| "desktop"
		| "cloud"
		| "game"
		| "other";

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
}

export interface ProjectLinks {
	github?: string;
	live?: string;
}

export type Groups = "experience" | "projects" | "highlights";

export type MarkdownImport = Record<Groups, Record<string, MarkdownContent>>;
export type ImagesImport = Record<Groups, Record<string, Record<string, any>>>;
