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
		LimitReachedComponent?: Snippet;
		NoItemsComponent?: Snippet;
	}

	const {
		data,
		limit,
		Item,
		Separator,
		LimitReachedComponent,
		NoItemsComponent,
	}: Props = $props();

	let limitReached: boolean = $derived(
		limit !== undefined && data.length > limit
	);
</script>

{#snippet Sep(pos: Position, index: number)}
	{#if Separator}
		{@render Separator(pos, index)}
	{/if}
{/snippet}

{#if data.length > 0}
	{@render Sep("first", 0)}
{:else if NoItemsComponent}
	{@render NoItemsComponent()}
{/if}

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

{#if limitReached && LimitReachedComponent}
	{@render LimitReachedComponent()}
{/if}
