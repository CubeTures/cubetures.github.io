<script lang="ts">
	import Project from "$lib/components/project.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<!-- Header -->
<!-- Experience -->
<!-- Projects -->
<!-- Skills -->

<div class="flex flex-wrap gap-4">
	{#each data.projects as project}
		<Project {...project} />
	{/each}
</div>
