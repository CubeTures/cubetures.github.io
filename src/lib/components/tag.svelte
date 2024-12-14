<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index";
	import { capitalize } from "$lib/scripts/helper";
	import type { Tags } from "$lib/scripts/ssg/types";

	interface Props {
		type: keyof Tags | "none";
		tag: string;
		count?: number;
	}

	const { type = "none", tag, count }: Props = $props();
</script>

{#if count && count > 0}
	{@render tip()}
{:else}
	{@render inner()}
{/if}

{#snippet inner()}
	<div
		class="border bg-middleground rounded-lg p-2 px-3 flex flex gap-2 relative tag"
	>
		{capitalize(tag)}
	</div>
{/snippet}

{#snippet tip()}
	<Tooltip.Provider>
		<Tooltip.Root delayDuration={0}>
			<Tooltip.Trigger>
				{@render inner()}
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Used <span class="text-primary font-bold">{count}</span> time{count === 1 ? "" : "s"}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Tooltip.Provider>
{/snippet}
