export interface ProjectContentGlob {
	metadata: any;
	default: any;
}

export interface ProjectContent {
	metadata: any;
	content: any;
}

export interface ProjectMetadata {
	name: string;
	desc: string;
	date: Date;
	tags: string[];
	pinned?: boolean;
}

export interface ProjectData extends ProjectMetadata {
	images: Record<string, any>;
	href: string;
}

export interface Glob<T> {
	default: T;
}
