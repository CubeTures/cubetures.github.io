<script lang="ts">
	import { getImage } from "$lib/scripts/ssg/importer";
	const { src, alt, children } = $props();

	console.log(`src: ${src}, alt: ${alt}`);
	const image = getImage(alt, src);
</script>

<img
	src={image}
	alt={`${alt} screenshot`}
/>
