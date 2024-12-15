<script lang="ts">
	import Grid from "$lib/components/grid.svelte";
	import ProjectCard from "$lib/components/projectCard.svelte";
	import type { ProjectData } from "$lib/scripts/ssg/types";
	import Icon from "@iconify/svelte";
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
		{#snippet LimitReachedComponent()}
			<div
				class="border border-border rounded-lg p-6 text-center sm:col-span-2"
				style="transition: all var(--transition)"
			>
				<a
					href={"/projects"}
					class="underline decoration-primary text-primary text-md flex gap-2 justify-center"
					>See full project list
					<!-- <Icon
						icon="mdi:external-link"
						width="24"
						height="24"
					/> -->
				</a>
			</div>
		{/snippet}
	</Limited>
</Grid>
