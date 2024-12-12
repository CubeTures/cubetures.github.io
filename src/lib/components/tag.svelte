<script lang="ts">
	import { capitalize } from "$lib/scripts/helper";
	import type { Tags } from "$lib/scripts/ssg/types";

	interface Props {
		type: keyof Tags | "none";
		tag: string;
	}

	const { type = "none", tag }: Props = $props();

	const classMap: Record<
		keyof Tags | "none",
		{ bg: string; border: string }
	> = {
		category: { bg: "bg-rose-950", border: "border-rose-800" },
		languages: { bg: "bg-blue-950", border: "border-blue-800" },
		frameworks: { bg: "bg-orange-950", border: "border-orange-800" },
		libraries: { bg: "bg-emerald-950", border: "border-emerald-800" },
		platforms: { bg: "bg-violet-950", border: "border-violet-800" },
		tools: { bg: "bg-fuchsia-950", border: "border-fuchsia-800" },
		none: { bg: "bg-middleground", border: "border-middleground" },
	};

	const { bg, border } = classMap[type];
</script>

<div class="border bg-middleground rounded-lg p-2 px-3">
	{capitalize(tag)}
</div>

<!-- {#if type === "none"}
	<div class="border bg-middleground rounded-lg p-2 px-3">
		{capitalize(tag)}
	</div>
{:else}
	<div class="border {bg} {border} rounded-lg p-2 px-3">
		{capitalize(tag)}
	</div>
{/if} -->
