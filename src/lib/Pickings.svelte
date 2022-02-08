<script lang="ts">
	import { onInterval } from '$lib/shared/utils';
	import Picking from '$lib/Picking.svelte';
    import { onMount } from 'svelte';

	export let settings: App.PickingsViewSettings;
	
	async function load() {
		error = false;
		try {
			const res = await fetch(`/pickings.json?limit=${settings.limit}&offset=${settings.offset}&status=${settings.status}`);
			if (res.ok) {
				pickings = await res.json();
				return
			}
			error = true;
		} catch (err) {
			error = true;
		}
	}
    
	onMount(load);
	onInterval(load, 60000);
	
	let pickings: any[];
	let error = false;
</script>


<svelte:head>
	<title>Pickings</title>
</svelte:head>

{#if error}
	<div>Error occured when loading data</div>
{:else if pickings === undefined}
    <div>loading</div>
{:else}
	<div class="wrapper">
		{#each pickings as picking (picking.id)}
			<Picking {picking} />
		{/each}
	</div>
{/if}

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-content: flex-start;
		height: 100vh;
	}
</style>
