<script
	lang="ts"
	generics="T"
>
	import type { Component, Snippet } from "svelte";

	type Position = "first" | "middle" | "last";
	interface Props {
		data: T[];
		Item: Snippet<[T]>;
		Separator?: Snippet<[Position, number]>;
		limit?: number;
		LimitReachedComponent?: Component;
	}

	const { data, limit, Item, Separator, LimitReachedComponent }: Props =
		$props();

	let limitReached: boolean = $state(
		limit !== undefined && data.length > limit
	);
</script>

{#snippet Sep(pos: Position, index: number)}
	{#if Separator}
		{@render Separator(pos, index)}
	{/if}
{/snippet}

{@render Sep("first", 0)}

{#each data as d, index}
	{#if limit}
		{@const pos: Position = index == limit - 1 || index == data.length - 1 ? "last" : "middle"}
		{#if index < limit}
			{@render Item(d)}
			{@render Sep(pos, index + 1)}
		{/if}
	{:else}
		{@const pos: Position = index == data.length - 1 ? "last" : "middle"}
		{@render Item(d)}
		{@render Sep(pos, index + 1)}
	{/if}
{/each}

{#if limitReached}
	<LimitReachedComponent />
{/if}
