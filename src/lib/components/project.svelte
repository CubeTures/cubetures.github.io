<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";
	import type { ProjectData } from "$lib/scripts/ssg/types";

	const { name, desc, images, tags, href }: ProjectData = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content>
		{#each images as image}
			<img
				src={image}
				alt={`${name} screenshot`}
			/>
		{/each}
	</Card.Content>
	<Card.Footer>
		<a {href}>Read more</a>
	</Card.Footer>
</Card.Root>
