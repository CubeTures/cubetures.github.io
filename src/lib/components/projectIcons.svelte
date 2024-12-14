<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import Icon from "@iconify/svelte";

	interface Props {
		github?: string;
		live?: string;
		tooltip?: boolean;
	}

	const { github, live, tooltip: useTooltip }: Props = $props();
</script>

{#if useTooltip}
	{#snippet tooltip(icon: string, content: string, href?: string)}
		{#if href}
			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<a {href}>
							<Icon
								{icon}
								width="24"
								height="24"
							/>
						</a>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>{content}</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		{/if}
	{/snippet}

	<div class="flex align-center justify-end gap-2 ml-6">
		{@render tooltip("mdi:access-point", "View the live project", live)}
		{@render tooltip(
			"mdi:github",
			"View the github repository for the project",
			github
		)}
	</div>
{:else}
	<div class="flex align-center justify-end gap-2 ml-6">
		{#if live}
			<a href={live}>
				<Icon
					icon="mdi:access-point"
					width="24"
					height="24"
				/>
			</a>
		{/if}
		{#if github}
			<a href={github}>
				<Icon
					icon="mdi:github"
					width="24"
					height="24"
				/>
			</a>
		{/if}
	</div>
{/if}
