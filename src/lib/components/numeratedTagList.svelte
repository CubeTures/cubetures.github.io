<script lang="ts">
	import { capitalize } from "$lib/scripts/helper";
	import type { NumeratedTags, Tags } from "$lib/scripts/ssg/types";
	import SectionHeader from "./sectionHeader.svelte";
	import Tag from "./tag.svelte";

	const {
		categories,
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

	function isLimited(limit: number) {
		const len =
			(categories ? Object.keys(categories).length : 0) +
			(languages ? Object.keys(languages).length : 0) +
			(frameworks ? Object.keys(frameworks).length : 0) +
			(libraries ? Object.keys(libraries).length : 0) +
			(platforms ? Object.keys(platforms).length : 0) +
			(tools ? Object.keys(tools).length : 0) +
			(other ? Object.keys(other).length : 0);

		return len > limit;
	}

	type RC = Record<string, number>;
	function setLimited(
		expanded: boolean,
		limit: number | undefined,
		toLimit: RC | undefined,
		...before: (RC | undefined)[]
	): RC | undefined {
		if (limit === undefined || toLimit === undefined || expanded) {
			return toLimit;
		}

		let beforeCount = 0;

		for (const rc of before) {
			if (rc !== undefined) {
				beforeCount += Object.keys(rc).length;
			}
		}

		if (beforeCount >= limit) {
			return {};
		} else if (Object.keys(toLimit).length + beforeCount <= limit) {
			return toLimit;
		} else {
			const left = limit - beforeCount;
			return Object.fromEntries(
				sortList(toLimit)
					.slice(0, left)
					.map((key) => [key, toLimit[key]])
			);
		}
	}

	const width = 640;
	let innerWidth = $state(width);
	let concat = $derived(innerWidth < width);
	const limit = $derived(concat && !labeled ? 2 : labeled ? undefined : 5);
	let limited = $derived(limit ? isLimited(limit) : false);
	let expanded = $state(false);

	//#region limited
	const lCategory = $derived(setLimited(expanded, limit, categories));
	const lLanguages = $derived(
		setLimited(expanded, limit, languages, categories)
	);
	const lFrameworks = $derived(
		setLimited(expanded, limit, frameworks, categories, languages)
	);
	const lLibraries = $derived(
		setLimited(
			expanded,
			limit,
			libraries,
			categories,
			languages,
			frameworks
		)
	);
	const lPlatforms = $derived(
		setLimited(
			expanded,
			limit,
			platforms,
			categories,
			languages,
			frameworks,
			libraries
		)
	);
	const lTools = $derived(
		setLimited(
			expanded,
			limit,
			tools,
			categories,
			languages,
			frameworks,
			libraries,
			platforms
		)
	);
	const lOther = $derived(
		setLimited(
			expanded,
			limit,
			other,
			categories,
			languages,
			frameworks,
			libraries,
			platforms,
			tools
		)
	);
	//#endregion
</script>

<svelte:window bind:innerWidth />

{#snippet Sec(section: keyof Tags, unsorted?: Record<string, number>)}
	{@const sorted = sortList(unsorted)}

	{#if sorted && Object.keys(sorted).length > 0}
		{#if labeled}
			<p class="text-2xl">{capitalize(section)}</p>
			<div class="flex flex-wrap gap-4">
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

{#if labeled}
	<SectionHeader title="Skills" />
{/if}

<div class="flex flex-wrap {labeled ? 'flex-col' : ''} gap-4">
	{@render Sec("categories", lCategory)}
	{@render Sec("languages", lLanguages)}
	{@render Sec("frameworks", lFrameworks)}
	{@render Sec("libraries", lLibraries)}
	{@render Sec("platforms", lPlatforms)}
	{@render Sec("tools", lTools)}
	{@render Sec("other", lOther)}

	{#if limited}
		<button
			class="border bg-middleground rounded-lg p-2 px-3 flex flex gap-2 relative tag underline text-muted-foreground"
			onclick={() => (expanded = !expanded)}
			>{expanded ? "less" : "more"}</button
		>
	{/if}
</div>
