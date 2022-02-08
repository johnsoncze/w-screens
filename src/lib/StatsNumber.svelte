<script lang="ts">
	export let name: string;
	export let value: number;
</script>

<div class="wrapper">
	<div class="name">{name}</div>
	<div class="value">
		{value ?? '-'}
	</div>
</div>

<style>
	.name,
	.value {
		font-size: 1.2em;
		text-transform: uppercase;
		text-align: center;
	}
	.value {
		font-size: 3em;
	}
	.wrapper {
		margin: 15px;
	}
</style>
