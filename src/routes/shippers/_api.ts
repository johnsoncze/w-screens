import type { EndpointOutput, RequestEvent } from '@sveltejs/kit';

import { API_BASE, API_BEARER_TOKEN } from '$lib/shared/_apiUtils';

const base = API_BASE;
const bearer_token = API_BEARER_TOKEN;
const bearer = 'Bearer ' + bearer_token;

export async function api(event: RequestEvent): Promise<EndpointOutput> {
	const query = `?query={"shipper.id":[${event.url.searchParams.get('shippersIds')}]}`;
	const res = await fetch(`${base}/shippers${query}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: bearer
		}
	});

	const result = await res.json();

	return {
		status: res.status,
		body: await result.data
	};
}
