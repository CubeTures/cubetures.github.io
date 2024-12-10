<script>
	import Project from "$lib/components/project.svelte";

	const count = Array.from({ length: 5 });
</script>

<div class="flex gap-4">
	{#each count}
		<Project />
	{/each}
</div>
