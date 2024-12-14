<script lang="ts">
	const { children } = $props();
</script>

<div class="grid gap-6 grid-cols-1 sm:grid-cols-2">
	{@render children()}
</div>