<script lang="ts">
	import Container from "$lib/components/container.svelte";
	import "../app.css";
	let { children } = $props();
</script>

<Container>
	{@render children()}
</Container>
