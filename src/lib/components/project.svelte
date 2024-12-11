<script lang="ts">
	import * as Card from "$lib/components/ui/card/index";

	interface Props {
		name: string;
		desc: string;
		page: string;
	}

	const { name, desc, page }: Props = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{name}</Card.Title>
		<Card.Description>{desc}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Content?</p>
	</Card.Content>
	<Card.Footer>
		<a href={page}>Read more</a>
	</Card.Footer>
</Card.Root>
