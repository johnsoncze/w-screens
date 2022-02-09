<script lang="ts">
	export let name: string;
	export let value: number;
</script>

<div class="name">{name}</div>
<div class="value">
	{value ?? '-'}
</div>

<style>
	.name,
	.value {
		font-size: 1.2em;
		text-transform: uppercase;
		text-align: center;
	}
	.value {
		margin: 8px 0;
		font-size: 3em;
	}
</style>
