<script lang="ts">
	import ProjectList from "$lib/components/projectList.svelte";
	import Summary from "$lib/components/summary.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<!-- Header -->
<!-- Experience -->
<!-- Projects -->
<!-- Skills -->
<!-- Links -->

<Summary />

<ProjectList
	projects={data.projects}
	limit={6}
/>
