<script lang="ts">
	import { capitalize } from "$lib/scripts/helper";
	import type { Tags } from "$lib/scripts/ssg/types";

	interface Props {
		type: keyof Tags | "none";
		tag: string;
	}

	const { type = "none", tag }: Props = $props();
</script>

<div class="border bg-middleground rounded-lg p-2 px-3">
	{capitalize(tag)}
</div>
