<script lang="ts">
    export let picking;
</script>
<div class="container">
    <div class="top">
        <div class="id-wrapper">
            <div class="id">{picking.id}</div>
            {#if picking.handling_group}
                <div class="handling-group">{picking.handling_group.code}</div>
            {/if}
        </div>
        {#if picking.shipper}
            <div class="shipper" style="background-color: {picking.shipper.color_background};">{picking.shipper.name}</div>
        {/if}
    </div>
    <div class="partner">{picking.partner.name}</div>
    <div class="status" style="background-color: {picking.status_color};">{picking.status}</div>
</div>

<style>
    .container {
        padding: 4px;
        display: flex;
        flex: 0 0 20%;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        border: 2px solid black;
        border-left: 4px solid black;
        background-color: var(--card-bg-color);
        box-sizing: border-box;
        height: 20vh;
    }
    .container:nth-child(5n) {
        border-right: 4px solid black;
    }
    .top {
        display: flex;
        justify-content: space-between;
    }
    .status {
        text-transform: uppercase;
        text-align: center;
    }
    .id {
        background-color: black;
        padding: 2px;
        color: yellow;
    }
    .shipper {
        padding: 2px;
    }
    .partner, .status {
        line-height: 1.5;
    }
    .id-wrapper {
        display: flex;
    }
    .handling-group {
        margin-left: 8px;
        padding: 2px;
        background-color: rgb(23, 113, 231);
    }
</style>
