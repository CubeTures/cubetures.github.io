<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";
	import type { ProjectData } from "$lib/scripts/ssg/types";
	import Icon from "@iconify/svelte";
	import TagList from "./tagList.svelte";
	import _ from "vanilla-tilt";

	const {
		name,
		desc,
		date,
		pinned,
		images,
		href,
		github,
		live,
		...tags
	}: ProjectData = $props();

	const thumbnail = Object.values(images)[0];
</script>

{#snippet Icons()}
	<div class="float-right flex align-center justify-end gap-2">
		{#if live}
			<a href={live}>
				<Icon
					icon="mdi:access-point"
					width="24"
					height="24"
				/>
			</a>
		{/if}
		{#if github}
			<a href={github}>
				<Icon
					icon="mdi:github"
					width="24"
					height="24"
				/>
			</a>
		{/if}
	</div>
{/snippet}

{#snippet Images()}
	<div class="w-full">
		<img
			class="w-full max-h-48 md:max-h-64 object-contain rounded-lg"
			src={thumbnail}
			alt={`${name} screenshot`}
		/>
	</div>
{/snippet}

<Card.Root
	class="w-full grid grid-rows-subgrid row-span-3 hover:z-50 tilter {name == "Example" ? "rose" : "fuchsia"}"
	data-tilt
	data-tilt-max="5"
	data-tilt-speed="300"
	data-tilt-perspective="1000"
	data-tilt-scale="1.05"
	data-tilt-easing="cubic-bezier(.15,.54,.31,.91)"
>
	<Card.Header
		class="bg-middleground border-b-border border-b-solid border-b pb-6 elevated-md rounded-lg rounded-b-none card-header"
	>
		<Card.Title>{name}<Icons /></Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content class="flex items-center elevated-md">
		<Images />
	</Card.Content>
	<Card.Footer class="self-start elevated-md">
		<TagList {...tags} />
	</Card.Footer>
</Card.Root>
