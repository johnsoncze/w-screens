<script context="module" lang="ts">
	export const prerender = true;
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ params, fetch }) => {
        const res = await fetch(`/view/${params.id}.json`);
        
		if (res.ok) {
            const viewData = await res.json();

			return {
				props: { viewData }
			};
		}
        
        const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
    import {VIEW_TYPE} from '$lib/constants'
    import Shippers from '$lib/Shippers.svelte'
    import Pickings from '$lib/Pickings.svelte'
    export let viewData;
</script>

{#if viewData.type === VIEW_TYPE.SHIPPERS}
    <Shippers settings={viewData.settings} />
{:else if viewData.type === VIEW_TYPE.PICKINGS}
    <Pickings settings={viewData.settings}/>
{/if}
