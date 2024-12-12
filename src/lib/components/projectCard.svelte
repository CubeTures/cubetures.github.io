<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";
	import type { ProjectData } from "$lib/scripts/ssg/types";
	import Icon from "@iconify/svelte";
	import TagList from "./tagList.svelte";

	const { name, desc, date, pinned, images, href, ...tags }: ProjectData =
		$props();

	const thumbnail = Object.values(images)[0];
</script>

{#snippet Icons()}
	<div class="float-right flex align-center justify-end gap-2">
		<a href="ww.example.com">
			<Icon
				icon="mdi:access-point"
				width="24"
				height="24"
			/>
		</a>
		<a href="www.example.com">
			<Icon
				icon="mdi:github"
				width="24"
				height="24"
			/>
		</a>
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

<Card.Root class="w-full grid grid-rows-subgrid row-span-3">
	<Card.Header
		class="bg-middleground border-b-border border-b-solid border-b pb-6"
	>
		<Card.Title>{name}<Icons /></Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content class="flex items-center">
		<Images />
	</Card.Content>
	<Card.Footer class="self-start">
		<TagList {...tags} />
	</Card.Footer>
</Card.Root>
