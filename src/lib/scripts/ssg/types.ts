export interface ProjectContentGlob {
	metadata: any;
	default: any;
}

export interface ProjectContent {
	metadata: any;
	content: any;
}

export type ProjectMetadata = {
	name: string;
	desc: string;
	date: Date;
	pinned?: boolean;
} & Tags;

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
	 * 		Other
	 * 		Game
	 *		Full Stack
	 *			Web
	 *			Desktop
	 *			Mobile
	 *			Cloud
	 */
	category: "web" | "mobile" | "desktop" | "cloud" | "game" | "other";

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