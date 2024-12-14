<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";
	import { settings } from "$lib/scripts/ssg/settings";
	import type { ExperienceData } from "$lib/scripts/ssg/types";
	import TagList from "./tagList.svelte";

	const {
		start,
		end,
		position,
		company,
		location,
		desc,
		color,
		visible,
		href,
		...tags
	}: ExperienceData = $props();

	function readableDate(date: Date) {
		return date.toLocaleString("default", {
			month: "short",
			year: "numeric",
		});
	}

	const tilt = settings.experience.tilt;
	const read = settings.experience.markdownLinks;
</script>

{#snippet Date()}
	<div class="self-end text-xl font-normal relative ml-6">
		<p class="text-right underline decoration-primary">
			{readableDate(start)} - {end ? readableDate(end) : "Present"}
		</p>
		<div
			class="absolute border-b border-b-2 border-b-primary w-14 -right-[3.1rem] bottom-[2.5px]"
		></div>
	</div>
{/snippet}

{#snippet Desc()}
	{#if desc.length > 1}
		<ul class="list-disc list-inside">
			{#each desc as d}
				<li>{d}</li>
			{/each}
		</ul>
	{:else}
		{desc}
	{/if}
{/snippet}

{#snippet Title()}
	{#if read}
		<a {href}>
			<p class="grow text-left">
				{position}
			</p>
		</a>
	{:else}
		<p class="grow text-left">
			{position}
		</p>
	{/if}
{/snippet}

<div class="flex gap-6">
	<Card.Root class="grow tilter {color}">
		<Card.Header
			class="bg-middleground border-b-border border-b-solid border-b pb-6 rounded-lg rounded-b-none"
		>
			<Card.Title class="flex flex-row-reverse flex-wrap justify-between">
				{@render Date()}
				{@render Title()}
			</Card.Title>
			<Card.Description class="mt-0"
				>{company} - {location}</Card.Description
			>
		</Card.Header>
		<Card.Content>
			{@render Desc()}
		</Card.Content>
		<Card.Footer>
			<TagList {...tags} />
		</Card.Footer>
	</Card.Root>
	<div class="border-r-2 border-r-solid border-r-primary z-50"></div>
</div>
