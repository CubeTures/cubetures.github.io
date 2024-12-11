<script lang="ts">
	import ProjectCard from "$lib/components/projectCard.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<!-- Header -->
<!-- Experience -->
<!-- Projects -->
<!-- Skills -->

<div class="flex flex-wrap gap-4">
	{#each data.projects as project}
		<ProjectCard {...project} />
	{/each}
</div>
