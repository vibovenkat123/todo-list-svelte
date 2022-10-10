<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { text } from 'svelte/internal';

	export let id: any;
	export let textContent: any;
	export let complete: any;

	const dispatch = createEventDispatcher();

	const remove = () => dispatch('remove', { id });
	const toggleStatus = () => {
		let status = !complete;
		dispatch('toggle', {
			id,
			status
		});
	};
</script>

<main>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
	<li>
		{#if complete}
			<span class="complete">
				{textContent}
			</span>
			<button on:click={toggleStatus}>
				<span class="material-symbols-outlined"> close </span></button
			>
		{:else}
			<span>
				{textContent}
			</span>
			<button on:click={toggleStatus}>
				<span class="material-symbols-outlined"> done </span></button
			>
		{/if}
		<button on:click={remove}>
			<span class="material-symbols-outlined"> delete </span>
		</button>
	</li>
</main>

<style scoped>
	.complete {
		text-decoration: line-through;
		color: green;
	}
</style>
