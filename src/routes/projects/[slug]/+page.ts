export const prerender = true;

import type { PageLoad } from "./$types";
import { getProject } from "$lib/scripts/ssg/projects";

export const load: PageLoad = async ({ params }) => {
	const id: string = params.slug;
	return getProject(id);
};
