<script lang="ts">
	import type { Tags } from "$lib/scripts/ssg/types";
	import type { PageData } from "../../routes/$types";
	import NumeratedTagList from "./numeratedTagList.svelte";
	import TagList from "./tagList.svelte";

	const { data }: { data: PageData } = $props();

	type Section = Exclude<keyof Tags, "category">;
	const sections: Section[] = [
		"languages",
		"frameworks",
		"libraries",
		"platforms",
		"tools",
		"other",
	];

	const calculated = calculate();

	function calculate(): Record<Section, Record<string, number>> {
		let result: any = {};

		for (const section of sections) {
			result[section] = getList(section);
		}

		return result;
	}

	function getList(section: Section): Record<string, number> {
		let result: Record<string, number> = {};

		for (const [category, list] of Object.entries(data)) {
			for (const entry of list) {
				for (const [key, values] of Object.entries(entry)) {
					if (key == section) {
						for (const value of values) {
							if(result[value]) {
								result[value] += 1;
							} else {
								result[value] = 1;
							}
						}
					}
				}
			}
		}

		return result;
	}

	console.log(calculated);
</script>

<NumeratedTagList
	{...calculated}
	labeled={true}
/>
