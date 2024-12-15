<script lang="ts">
	import { filters } from "$lib/hooks/state.svelte";
	import { filterData, filterList, flattenData } from "$lib/scripts/filters";
	import type {
		ExperienceData,
		Groups,
		ProjectData,
		Tags,
	} from "$lib/scripts/ssg/types";
	import NumeratedTagList from "./numeratedTagList.svelte";

	type Data = {
		experience?: ExperienceData[];
		projects?: ProjectData[];
	};

	interface Props {
		data: Data;
		group?: Groups;
	}

	const { data, group }: Props = $props();
	let filteredData = $derived(filterData(filters.category, data));

	type Section = Exclude<keyof Tags, "category">;
	const sections: Section[] = [
		"languages",
		"frameworks",
		"libraries",
		"platforms",
		"tools",
		"other",
	];

	const calculated = $derived(calculate(filteredData));

	function calculate(data: Data): Record<Section, Record<string, number>> {
		let result: any = {};

		for (const section of sections) {
			result[section] = getList(data, section);
		}

		return result;
	}

	function getList(data: Data, section: Section): Record<string, number> {
		let result: Record<string, number> = {};

		for (const [grp, list] of Object.entries(data)) {
			if (group && grp !== group) {
				continue;
			}

			for (const entry of list) {
				if (entry.exclude === true) {
					continue;
				}

				for (const [key, values] of Object.entries(entry)) {
					if (key == section) {
						for (const value of values) {
							const v = entry.visible === false ? 0 : 1;

							if (result[value]) {
								result[value] += v;
							} else {
								result[value] = v;
							}
						}
					}
				}
			}
		}

		return result;
	}
</script>

<NumeratedTagList
	{...calculated}
	labeled={true}
/>
