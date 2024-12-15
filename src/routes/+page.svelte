<script lang="ts">
	import ExperienceList from "$lib/components/experienceList.svelte";
	import ProjectList from "$lib/components/projectList.svelte";
	import SkillList from "$lib/components/skillList.svelte";
	import Summary from "$lib/components/summary.svelte";
	import { generateAll } from "$lib/scripts/colors/generate";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	// const css = generateAll();
	// console.log(css);
</script>

<svelte:head>
	<title>Owen Shadburne</title>
	<meta
		name="description"
		content="A portfolio website for Owen Shadburne"
	/>
</svelte:head>

{#snippet Header(text: string)}
	<h2 class="text-4xl font-medium underline decoration-primary">{text}</h2>
{/snippet}

<Summary />

{@render Header("Experience")}
<ExperienceList
	experience={data.experience}
	limit={6}
/>

{@render Header("Projects")}
<ProjectList
	projects={data.projects}
	limit={6}
/>

{@render Header("Skills")}
<SkillList {data} />
