<script lang="ts">
	import { filters } from "$lib/hooks/state.svelte";
	import { filterList } from "$lib/scripts/filters";
	import { settings } from "$lib/scripts/ssg/settings";
	import type { ExperienceData } from "$lib/scripts/ssg/types";
	import ExperienceCard from "./experienceCard.svelte";
	import GridBlock from "./gridBlock.svelte";
	import Limited from "./limited.svelte";
	import SectionHeader from "./sectionHeader.svelte";

	interface Props {
		experience: ExperienceData[];
		limit?: number;
	}

	const { experience, limit }: Props = $props();

	const data = $derived.by(() => {
		if (settings.filters.experienceFiltered) {
			return filterList(filters.category, experience);
		}

		return experience;
	});
</script>

<SectionHeader title="Experience" />

<div class="flex flex-col">
	<Limited
		{data}
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
		{#snippet LimitReachedComponent()}
			<GridBlock>
				<a
					href={"/experience"}
					class="underline decoration-primary text-primary text-md flex gap-2 justify-center"
					style="transition: inherit"
					>See full experience list
				</a>
			</GridBlock>
		{/snippet}
		{#snippet NoItemsComponent()}
			<GridBlock>
				<p>No experience exists under the current filters.</p>
			</GridBlock>
		{/snippet}
	</Limited>
</div>
