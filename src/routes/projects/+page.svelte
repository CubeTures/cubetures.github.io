<script lang="ts">
	import ProjectList from "$lib/components/projectList.svelte";
	import SectionHeader from "$lib/components/sectionHeader.svelte";
	import SkillList from "$lib/components/skillList.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects - Owen Shadburne</title>
	<meta
		name="description"
		content="A complete list of all the projects created by Owen Shadburne."
	/>
</svelte:head>

<SectionHeader title="Projects" />
<ProjectList projects={data.projects} />

<SectionHeader title="Skills" />
<SkillList
	{data}
	group={"projects"}
/>
