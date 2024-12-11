export interface ProjectData {
	name: string;
	desc: string;
	images: string;
	markdown: string;
	page: string;
}

export interface ProjectMetadata {
	name: string;
	desc: string;
}

export interface Glob<T> {
	default: T
}

export interface ProjectContent {
	metadata: any;
	content: any;
}