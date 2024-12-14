<script lang="ts">
	import { getImage } from "$lib/scripts/ssg/importer";
	import type { Groups } from "$lib/scripts/ssg/types";

	interface Props {
		alt: string;
		src: any;
	}

	const { alt, src }: Props = $props();

	const [group, project] = alt.split(" ");
	const image = getImage(group as Groups, project, src);
</script>

<img
	src={image}
	alt={`${project} screenshot`}
/>
