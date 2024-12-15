<script lang="ts">
	import ExperienceList from "$lib/components/experienceList.svelte";
	import SectionHeader from "$lib/components/sectionHeader.svelte";
	import SkillList from "$lib/components/skillList.svelte";
	import type { PageData } from "./$types";

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Experience - Owen Shadburne</title>
	<meta
		name="description"
		content="A complete list of experiences Owen Shadburne has been a part of."
	/>
</svelte:head>

<ExperienceList experience={data.experience} />

<SkillList
	{data}
	group={"experience"}
/>
