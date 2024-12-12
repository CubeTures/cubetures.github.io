<script lang="ts">
	import Grid from "$lib/components/grid.svelte";
	import ProjectCard from "$lib/components/projectCard.svelte";
	import type { ProjectData } from "$lib/scripts/ssg/types";
	import Limited from "./limited.svelte";

	interface Props {
		projects: ProjectData[];
		limit?: number;
	}

	const { projects, limit }: Props = $props();
</script>

<Grid>
	<Limited
		data={projects}
		{limit}
	>
		{#snippet Item(project: ProjectData)}
			<ProjectCard {...project} />
		{/snippet}
	</Limited>
</Grid>
