<script module>
	// if the custom components aren't loading, try restarting the dev server
	// import p from "$lib/components/markdown/p.svelte";
	// import code from "$lib/components/markdown/code.svelte";
	import img from "$lib/components/markdown/img.svelte"
	
	export { img };
</script>

<script lang="ts">
	const { children } = $props();
</script>

{@render children()}