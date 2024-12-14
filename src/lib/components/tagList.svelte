<script lang="ts">
	import type { Tags } from "$lib/scripts/ssg/types";
	import Tag from "./tag.svelte";

	const {
		category,
		languages,
		frameworks,
		libraries,
		platforms,
		tools,
	}: Tags = $props();
</script>

<div class="flex flex-wrap gap-4">
	<Tag
		type="category"
		tag={category as string}
	/>

	{#if languages}
		{#each languages as language}
			<Tag
				type="languages"
				tag={language}
			/>
		{/each}
	{/if}

	{#if frameworks}
		{#each frameworks as framework}
			<Tag
				type="frameworks"
				tag={framework}
			/>
		{/each}
	{/if}

	{#if libraries}
		{#each libraries as library}
			<Tag
				type="libraries"
				tag={library}
			/>
		{/each}
	{/if}

	{#if platforms}
		{#each platforms as platform}
			<Tag
				type="platforms"
				tag={platform}
			/>
		{/each}
	{/if}

	{#if tools}
		{#each tools as tool}
			<Tag
				type="tools"
				tag={tool}
			/>
		{/each}
	{/if}
</div>
