<script lang="ts">
	import Container from "$lib/components/container.svelte";
	import "../app.css";
	import "$lib/styles/tilter.css";
	import Nav from "$lib/components/nav.svelte";
	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="google-site-verification"
		content="LXXoDAUTlFNiodERmlNtYpkZfU9Dp7DlTyXJGpl5KgU"
	/>
</svelte:head>

<Nav />
<Container>
	{@render children()}
</Container>
