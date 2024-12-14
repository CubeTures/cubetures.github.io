<script lang="ts">
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { capitalize } from "$lib/scripts/helper";
	import type { Tags } from "$lib/scripts/ssg/types";

	interface Props {
		type: keyof Tags | "none";
		tag: string;
		count?: number;
	}

	const { type = "none", tag, count }: Props = $props();
</script>

<div
	class="border bg-middleground rounded-lg p-2 px-3 flex flex gap-2 relative"
>
	{capitalize(tag)}
	{#if count && count > 0}
		<Badge
			class="self-center"
			style="transition: all var(--transition)">{count}</Badge
		>
	{/if}
</div>
