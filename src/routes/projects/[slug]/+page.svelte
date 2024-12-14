<script lang="ts">
	import InvalidPage from "$lib/components/invalidPage.svelte";
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	{#if data.content}
		<title>{data.metadata.name} - Owen Shadburne</title>
		<meta
			name="description"
			content={data.metadata.desc}
		/>
	{/if}
</svelte:head>

{#if data.content}
	<data.content />
{:else}
	<InvalidPage
		group={"projects"}
		id={data.id as string}
	/>
{/if}
