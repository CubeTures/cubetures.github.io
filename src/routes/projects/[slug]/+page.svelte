<script lang="ts">
	import type { ProjectMetadata } from "$lib/scripts/ssg/types";
	import type { PageData } from "./$types";

	const { data }: { data: PageData } = $props();

	let buttonData: any | undefined = $state();
	async function getButtonData() {
		const response = await fetch(
			"/static.md"
		);

		console.log(response);
		buttonData = await response.text();
	}
</script>

<data.content />
