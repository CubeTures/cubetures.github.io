export const prerender = settings.experience.markdownLinks;

import { getExperience } from "$lib/scripts/ssg/experience";
import { settings } from "$lib/scripts/ssg/settings";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const id: string = params.slug;
	return prerender ? getExperience(id) : { id };
};
