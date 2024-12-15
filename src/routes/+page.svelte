<script lang="ts">
	import { page } from "$app/stores";
	import ExperienceList from "$lib/components/experienceList.svelte";
	import ProjectList from "$lib/components/projectList.svelte";
	import SkillList from "$lib/components/skillList.svelte";
	import Summary from "$lib/components/summary.svelte";
	import { filters } from "$lib/hooks/state.svelte";
	import { categories, type Category } from "$lib/scripts/ssg/types";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();

	$effect(() => {
		const hash = $page.url.hash.replace("#", "");

		if (hash && categories.includes(hash as Category)) {
			filters.category = hash as Category;
		}
	});
</script>

<svelte:head>
	<title>Owen Shadburne</title>
	<meta
		name="description"
		content="A portfolio website for Owen Shadburne"
	/>
</svelte:head>

<Summary />

<ExperienceList
	experience={data.experience}
	limit={6}
/>

<ProjectList
	projects={data.projects}
	limit={6}
/>

<SkillList {data} />
