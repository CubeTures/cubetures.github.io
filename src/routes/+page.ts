import { getProjectList } from "$lib/scripts/ssg/projects";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	return {
		projects: getProjectList(),
	};
};
