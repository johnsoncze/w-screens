<script lang="ts">
	import Shipper from '$lib/Shipper.svelte';
	import { onInterval } from '$lib/shared/utils';
	import Loader from '$lib/Loader.svelte';
	import { onMount } from 'svelte';
	export let settings: App.ShippersViewSettings;

	async function load() {
		error = false;
		try {
			const res = await fetch(`/shippers.json?shippersIds=${settings.shippersIds}`);
			if (res.ok) {
				shippers = await res.json();
				return;
			}
			error = true;
		} catch (err) {
			error = true;
		}
	}

	onMount(load);
	onInterval(load, 60000);

	let shippers: App.Shipper[];
	let error = false;
</script>

<svelte:head>
	<title>Shippers</title>
</svelte:head>

{#if error}
	<div>Error occured when loading data</div>
{:else if shippers === undefined}
	<Loader />
{:else}
	<div class="wrapper">
		{#each shippers as shipper (shipper.id)}
			<Shipper {shipper} />
		{/each}
	</div>
{/if}

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>
