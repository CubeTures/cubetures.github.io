<script lang="ts">
	import Grid from "$lib/components/grid.svelte";
	import ProjectCard from "$lib/components/projectCard.svelte";
	import type { ProjectData } from "$lib/scripts/ssg/types";
	import Limited from "./limited.svelte";
	import { filters } from "$lib/hooks/state.svelte";
	import { filterList } from "$lib/scripts/filters";
	import SectionHeader from "./sectionHeader.svelte";
	import GridBlock from "./gridBlock.svelte";

	interface Props {
		projects: ProjectData[];
		limit?: number;
	}

	const { projects, limit }: Props = $props();
	const data = $derived(filterList(filters.category, projects));
</script>

<SectionHeader title="Projects" />

<Grid>
	<Limited
		{data}
		{limit}
	>
		{#snippet Item(project: ProjectData)}
			<ProjectCard {...project} />
		{/snippet}
		{#snippet LimitReachedComponent()}
			<GridBlock>
				<a
					href={"/projects"}
					class="underline decoration-primary text-primary text-md flex gap-2 justify-center"
					style="transition: inherit"
					>See full project list
				</a>
			</GridBlock>
		{/snippet}
		{#snippet NoItemsComponent()}
			<GridBlock>
				<p>No projects exist under the current filters.</p>
			</GridBlock>{/snippet}
	</Limited>
</Grid>
