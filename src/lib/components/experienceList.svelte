<script lang="ts">
	import type { ExperienceData } from "$lib/scripts/ssg/types";
	import ExperienceCard from "./experienceCard.svelte";
	import Limited from "./limited.svelte";

	interface Props {
		experience: ExperienceData[];
		limit?: number;
	}

	const { experience, limit }: Props = $props();
</script>

<div class="flex flex-col">
	<Limited
		data={experience}
		{limit}
	>
		{#snippet Item(exp: ExperienceData)}
			<ExperienceCard {...exp} />
		{/snippet}
		{#snippet Separator(pos, index)}
			{#if pos === "first"}
				<div
					class="border-r-2 border-dashed border-r-primary h-3 z-30 -mt-6"
				></div>
				<div
					class="border-r-2 border-solid border-r-primary h-3 z-30"
				></div>
			{:else if pos === "last"}
				<div
					class="border-r-2 border-solid border-r-primary h-3 z-30"
				></div>
				<div
					class="border-r-2 border-dashed border-r-primary h-3 z-30 -mb-6"
				></div>
			{:else}
				<div
					class="border-r-2 border-r-solid border-r-primary h-6 z-30"
				></div>
			{/if}
		{/snippet}
	</Limited>
</div>
