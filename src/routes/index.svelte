<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import DashboardCard from '$lib/DashboardCard.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<DashboardCard name="Shippers view example" link="/view/1" />
	<DashboardCard name="Pickings view example" link="/view/2" />
</section>


<style>
	section {
		flex-direction: column;
		justify-content: space-around;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
