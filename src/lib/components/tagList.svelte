<script lang="ts">
	import type { Tags } from "$lib/scripts/ssg/types";
	import NumeratedTagList from "./numeratedTagList.svelte";

	const {
		category,
		languages,
		frameworks,
		libraries,
		platforms,
		tools,
		other,
		labeled,
	}: Partial<Tags> & {
		labeled?: boolean;
	} = $props();

	let cat: Record<string, number> = {};
	if (category) {
		cat[category as string] = 0;
	}

	function trans(list?: string[]): Record<string, number> {
		if (list === undefined) {
			return {};
		}

		return Object.fromEntries(list.map((key) => [key, 0]));
	}
</script>

<NumeratedTagList
	category={cat}
	languages={trans(languages)}
	frameworks={trans(frameworks)}
	libraries={trans(libraries)}
	platforms={trans(platforms)}
	tools={trans(tools)}
	other={trans(other)}
	{labeled}
/>
