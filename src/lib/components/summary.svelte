<script lang="ts">
	import * as Select from "$lib/components/ui/select/index.js";
	import { summaries } from "$lib/data/summary";
	import { filters } from "$lib/hooks/state.svelte";
	import type { Category } from "$lib/scripts/ssg/types";

	const options: { value: Category; label: string }[] = [
		{
			value: "software",
			label: "Software",
		},
		{
			value: "full-stack",
			label: "Full-stack",
		},
		{
			value: "web",
			label: "Web",
		},
		{
			value: "mobile",
			label: "Mobile",
		},
		{
			value: "desktop",
			label: "Desktop",
		},
		{
			value: "cloud",
			label: "Cloud",
		},
		{
			value: "game",
			label: "Game",
		},
		{
			value: "other",
			label: "Other",
		},
	];

	const triggerContent = $derived.by(() => {
		if (filters.category === "other") {
			return `<span class="underline decoration-primary" style="transition: text-decoration var(--transition)">Engineer.</span>`;
		}

		const header = options.find(
			(op) => op.value === filters.category
		)?.label;
		const footer = filters.category === "cloud" ? "engineer" : "developer";
		return `<span><span class="underline decoration-primary" style="transition: text-decoration var(--transition)">${header}</span> ${footer}.</span>`;
	});

	function set(value: Category) {
		filters.category = value;
	}

	function get(): Category {
		return filters.category;
	}
</script>

{#snippet Choice()}
	<span class="inline-block">
		<Select.Root
			type="single"
			name="category"
			bind:value={get, set}
		>
			<Select.Trigger class="gap-3 text-2xl px-0">
				{@html triggerContent}
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{#each options as option}
						<Select.Item
							value={option.value}
							label={option.label}
							class="text-lg"
							>{option.label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
	</span>
{/snippet}

<div class="flex flex-col gap-4">
	<h1
		class="text-5xl font-semibold text-primary"
		style="transition: color var(--transition)"
	>
		Owen Shadburne
	</h1>
	<p class="text-2xl">
		I'm a{filters.category === "other" ? "n" : ""}
		{@render Choice()}
	</p>
	<p class="text-lg">{summaries[filters.category]}</p>
</div>
