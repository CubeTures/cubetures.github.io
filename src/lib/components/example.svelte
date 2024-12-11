<script lang="ts">
	let count = $state(0);
</script>

<div>
	<button onclick={() => count--}>-</button>
	{count}
	<button onclick={() => count++}>+</button>
</div>
