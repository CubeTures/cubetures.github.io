<script lang="ts">
	import { capitalize } from "$lib/scripts/helper";
	import type { NumeratedTags, Tags } from "$lib/scripts/ssg/types";
	import Tag from "./tag.svelte";

	const {
		category,
		languages,
		frameworks,
		libraries,
		platforms,
		tools,
		other,
		labeled,
	}: NumeratedTags & {
		labeled?: boolean;
	} = $props();

	function sortList(unsorted?: Record<string, number>): string[] {
		if (unsorted === undefined) {
			return [];
		}

		if (labeled) {
			return Object.keys(unsorted).sort((keyA, keyB) => {
				const value = unsorted[keyB] - unsorted[keyA];

				if (value == 0) {
					return keyA.localeCompare(keyB);
				} else {
					return value;
				}
			});
		} else {
			return Object.keys(unsorted).sort((keyA, keyB) =>
				keyA.localeCompare(keyB)
			);
		}
	}
</script>

{#snippet Sec(section: keyof Tags, unsorted?: Record<string, number>)}
	{@const sorted = sortList(unsorted)}
	{#if sorted && Object.keys(sorted).length > 0}
		{#if labeled}
			<p class="text-2xl">{capitalize(section)}</p>
			<div class="flex gap-4">
				{#each sorted as key}
					<Tag
						type={section}
						tag={key}
						count={unsorted![key]}
					/>
				{/each}
			</div>
		{:else}
			{#each sorted as key}
				<Tag
					type={section}
					tag={key}
				/>
			{/each}
		{/if}
	{/if}
{/snippet}

<div class="flex flex-wrap {labeled ? 'flex-col' : ''} gap-4">
	{@render Sec("category", category)}
	{@render Sec("languages", languages)}
	{@render Sec("frameworks", frameworks)}
	{@render Sec("libraries", libraries)}
	{@render Sec("platforms", platforms)}
	{@render Sec("tools", tools)}
	{@render Sec("other", other)}
</div>
