import type { Category } from "$lib/scripts/ssg/types";

export const filters: {
	category: Category;
} = $state({
	category: "software",
});

