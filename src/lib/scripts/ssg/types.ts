export interface ProjectContent {
	metadata: any;
	content: any;
}

export interface ProjectMetadata {
	name: string;
	desc: string;
	date: Date;
	tags: string[];
}

export interface ProjectData extends ProjectMetadata {
	images: string[];
	href: string;
}

export interface Glob<T> {
	default: T;
}
