<script lang="ts">
	import Project from "$lib/components/project.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<div class="flex gap-4">
	{#each data.projects as project}
		<Project {...project} />
	{/each}
</div>

<br />

<p>{JSON.stringify(data)}</p>
