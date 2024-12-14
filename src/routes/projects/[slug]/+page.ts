export const prerender = settings.projects.markdownLinks;

import type { PageLoad } from "./$types";
import { getProject } from "$lib/scripts/ssg/projects";
import { settings } from "$lib/scripts/ssg/settings";

export const load: PageLoad = async ({ params }) => {
	const id: string = params.slug;
	return prerender ? getProject(id) : { id };
};
