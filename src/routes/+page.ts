import { getExperienceList } from "$lib/scripts/ssg/experience";
import { getProjectList } from "$lib/scripts/ssg/projects";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = ({ url }) => {
	return {
		experience: getExperienceList(),
		projects: getProjectList(),
	};
};
