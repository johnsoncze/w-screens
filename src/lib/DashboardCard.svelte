<script lang="ts">
	import { goto } from '$app/navigation';

	export let name: string;
	export let actionName: string = 'Open dashboard';
	export let link: string;
</script>

<a class="wrapper" href={link}>
	<h2>
		{name}
	</h2>
	<div>
		{actionName}
	</div>
</a>

<style>
	.wrapper {
		background: rgb(82, 43, 43);
		padding: 50px;
		border-radius: 10px;
		position: relative;
		text-align: center;
		margin-bottom: 10px;
		cursor: pointer;
		color: aliceblue;
		text-decoration: none;
	}
</style>
