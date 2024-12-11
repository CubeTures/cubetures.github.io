<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";
	import type { ProjectData } from "$lib/scripts/ssg/types";

	const { name, desc, date, tags, pinned, images, href }: ProjectData =
		$props();
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content class="flex justify-center">
		{#each Object.values(images) as image}
			<img
				class="max-h-48 md:max-h-64"
				src={image}
				alt={`${name} screenshot`}
			/>
		{/each}
	</Card.Content>
	<Card.Footer>
		<a {href}>Read more</a>
	</Card.Footer>
</Card.Root>
