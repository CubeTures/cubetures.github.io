<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";
	import type { ProjectData } from "$lib/scripts/ssg/types";
	import ProjectIcons from "./projectIcons.svelte";
	import TagList from "./tagList.svelte";
	import _ from "vanilla-tilt";
	import { settings } from "$lib/scripts/ssg/settings";

	const {
		id,
		name,
		desc,
		date,
		pinned,
		images,
		href,
		github,
		live,
		color,
		...tags
	}: ProjectData = $props();

	const thumbnail = $derived(images[id]);

	const tilt = settings.projects.tilt;
	const read = settings.projects.markdownLinks;

	const tiltOptions = tilt
		? {
				"data-tilt": true,
				"data-tilt-max": "5",
				"data-tilt-speed": "300",
				"data-tilt-perspective": "1000",
				"data-tilt-scale": "1.05",
				"data-tilt-easing": "cubic-bezier(.15,.54,.31,.91)",
			}
		: {};
	const elevation = tilt ? "elevation-md" : "";
	const header = tilt ? "card-header" : "";
</script>

{#snippet Images()}
	{#if read}
		<a
			class="w-full"
			{href}
		>
			<img
				class="w-full max-h-48 md:max-h-64 object-contain rounded-lg"
				src={images[id]}
				alt={`${name} screenshot`}
			/>
		</a>
	{/if}
	<img
		class="w-full max-h-48 md:max-h-64 object-contain rounded-lg"
		src={thumbnail}
		alt={`${name} screenshot`}
	/>
{/snippet}

<Card.Root
	class="w-full grid grid-rows-subgrid row-span-3 hover:z-20 tilter {color} {header}"
	{...tiltOptions}
>
	<Card.Header
		class="bg-middleground border-b-border border-b-solid border-b pb-6 elevated-{elevation} rounded-lg rounded-b-none "
	>
		<Card.Title class="flex flex-row-reverse flex-wrap justify-between">
			<ProjectIcons
				{live}
				{github}
			/>
			<div class="grow self-start text-left">
				{#if read}
					<a {href}>{name}</a>
				{:else}
					{name}
				{/if}
			</div>
		</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content class="flex items-center elevated-{elevation}">
		<Images />
	</Card.Content>
	<Card.Footer class="self-start elevated-{elevation}">
		<TagList {...tags} />
	</Card.Footer>
</Card.Root>
