<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col w-full p-6 pb-24">
	<div class="flex flex-col gap-6 self-center max-w-full xl:max-w-screen-lg">
		{@render children()}
	</div>
</div>
