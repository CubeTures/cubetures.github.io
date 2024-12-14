import type { Groups } from "./types";

type Settings = Record<
	Groups,
	{
		tilt: boolean;
		markdownLinks: boolean;
	}
>;

export const settings: Settings = {
	experience: {
		tilt: false,
		markdownLinks: false,
	},
	projects: {
		tilt: false,
		markdownLinks: false,
	},
	highlights: {
		tilt: false,
		markdownLinks: false,
	},
};
