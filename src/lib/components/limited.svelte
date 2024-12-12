<script
	lang="ts"
	generics="T"
>
	import type { Component, Snippet } from "svelte";

	interface Props {
		data: T[];
		Item: Snippet<[T]>;
		limit?: number;
		LimitReachedComponent?: Component;
	}

	const { data, limit, Item, LimitReachedComponent }: Props = $props();

	let limitReached: boolean = $state(
		limit !== undefined && data.length > limit
	);
</script>

{#each data as d, index}
	{#if limit}
		{#if index < limit}
			{@render Item(d)}
		{/if}
	{:else}
		{@render Item(d)}
	{/if}
{/each}

{#if limitReached}
	<LimitReachedComponent />
{/if}
