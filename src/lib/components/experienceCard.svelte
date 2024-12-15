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
		<p class="text-right border-b-2 border-b-primary pl-2">
			{readableDate(start)} - {end ? readableDate(end) : "Present"}
		</p>
		<div
			class="absolute border-b border-b-2 border-b-primary w-14 -right-[3.1rem] bottom-0"
		></div>
	</div>
{/snippet}

{#snippet Title()}
	{#if read}
		<a
			{href}
			class="grow self-start text-left"
		>
			{position}
		</a>
	{:else}
		<p class="grow self-start text-left">
			{position}
		</p>
	{/if}
{/snippet}

{#snippet Desc()}
	{#if Array.isArray(desc) && desc.length > 1}
		<ul class="list-disc sm:ml-6">
			{#each desc as d}
				<li>{d}</li>
			{/each}
		</ul>
	{:else}
		{desc}
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
			<Card.Description>{company} - {location}</Card.Description>
		</Card.Header>
		<Card.Content>
			{@render Desc()}
		</Card.Content>
		<Card.Footer>
			<TagList {...tags} />
		</Card.Footer>
	</Card.Root>
	<div class="border-r-2 border-r-solid border-r-primary z-30"></div>
</div>
