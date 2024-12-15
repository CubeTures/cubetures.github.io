<script lang="ts">
	import Icon from "@iconify/svelte";

	const linkedin = "https://www.linkedin.com/in/owen-shadburne/";
	const github = "https://github.com/owenshadburne";
	const itch = "https://cubetures.itch.io";
</script>

<div
	class="sticky w-full top-0 z-40 bg-middleground/80 p-2 px-6 flex justify-center border-b-2 border-b-primary"
	style="backdrop-filter: blur(10px)"
>
	<div class="flex gap-2 justify-between max-w-screen-md grow">
		<div class="flex gap-2">
			<!-- Sidebar goes here if needed -->
			<!-- <Icon
				icon="mdi:hamburger-menu"
				width="36"
				height="36"
			/> -->
			<a
				href="/"
				class="flex gap-2"
			>
				<img
					src="/Logo.png"
					alt="Home"
					width="36"
					height="36"
				/>
			</a>
		</div>
		<div class="flex gap-2">
			<a href={itch} class="self-center">
				<Icon
					icon="fa6-brands:itch-io"
					width="32"
					height="32"
				/>
			</a>
			<a href={github}>
				<Icon
					icon="mdi:github"
					width="36"
					height="36"
				/>
			</a>
			<a href={linkedin}>
				<Icon
					icon="mdi:linkedin"
					width="36"
					height="36"
				/>
			</a>
		</div>
	</div>
</div>
