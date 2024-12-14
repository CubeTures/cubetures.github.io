<script lang="ts">
	import InvalidPage from "$lib/components/invalidPage.svelte";
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	{#if data.content}
		<title>{data.metadata.position} - Owen Shadburne</title>
		<meta
			name="description"
			content={data.metadata.desc.join(". ")}
		/>
	{/if}
</svelte:head>

{#if data.content}
	<data.content />
{:else}
	<InvalidPage
		group={"experience"}
		id={data.id as string}
	/>
{/if}
