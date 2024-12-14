<script lang="ts">
	import type { Groups } from "$lib/scripts/ssg/types";

	interface Props {
		group: Groups;
		id: string;
	}

	const { group, id }: Props = $props();

	const singular: Record<Groups, string> = {
		experience: "experience",
		projects: "project",
		highlights: "highligh",
	};
</script>

<div class="flex flex-col place-self-center text-center">
	<h1 class="text-2xl font-bold">Oops!</h1>
	<br />
	<p>This page does not exist.</p>
	<!-- <p>(I have no {singular[group]} called "{id}".)</p> -->
	<p>
		Go back or return to the <a
			href="/"
			class="text-primary underline decoration-primary">home page</a
		>.
	</p>
</div>
