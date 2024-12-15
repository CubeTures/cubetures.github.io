<script lang="ts">
	const { children } = $props();
</script>

<div
	class="border border-border rounded-lg p-6 text-center sm:col-span-2"
	style="transition: all var(--transition)"
>
	{@render children()}
</div>
