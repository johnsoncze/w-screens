/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {

	interface Shipper {
		active:boolean;
		color_background: string;
		color_foreground: string;
		id: string;
		name: string;
		require_manifest:boolean;
		stats: ShipperStats;
	};
	interface ShipperStats {
		parcels_to_dispatch: number
		parcels_to_manifest: number
		parcels_today_estimated: number
		parcels_today_to_close: number
		parcels: number
		shipments_to_label: number
		shipments: number
	};

	interface ShippersViewSettings {
		shippersIds: string[];
	}

	interface PickingsViewSettings {
		status: string[],
		limit: number,
		offset: number,
	}
}
