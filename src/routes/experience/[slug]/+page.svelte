<script lang="ts">
	import InvalidPage from "$lib/components/invalidPage.svelte";
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();
</script>

{#if data.content}
	<data.content />
{:else}
	<InvalidPage
		group={"experience"}
		id={data.id as string}
	/>
{/if}
