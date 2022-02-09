<script lang="ts">
    import StatsNumber from '$lib/StatsNumber.svelte';
    export let shipper:App.Shipper
</script>

{#if shipper}
    <div class="container">
        <section>
            <div class='title' style="background-color: {shipper.color_background ?? "#606060"}; color: {shipper.color_foreground}">{shipper.name}</div>
            <div class="stats">
                <StatsNumber name='shipments' value={shipper.stats.shipments}/>
                <StatsNumber name='to label' value={shipper.stats.shipments_to_label}/>
            </div>
        </section>
        <section>
            <div class="stats">
                <StatsNumber name='Parcels / to manifest' value={shipper.stats.parcels_to_manifest}/>
                <StatsNumber name='Parcels / to dispatch' value={shipper.stats.parcels_to_dispatch}/>
                <StatsNumber name='Parcels / total' value={shipper.stats.parcels}/>
            </div>
        </section>
        <section>
            <div class="stats">
                <StatsNumber name='Parcels / today est.' value={shipper.stats.parcels_today_estimated}/>
            </div>
        </section>
    </div>
{/if}

<style>
    section{
        background-color: var(--card-bg-color);
        margin-bottom: 5px;
    }
    .stats{
        padding: 20px;
    }
    .title{
        text-transform: uppercase;
        text-align: center;
        font-size: 2em;
    }
    .container {
        width: 100%;
        margin-left: 6px;
    }
    .container:first-child {
        margin-left: 0;
    }
</style>
