import type { EndpointOutput, RequestEvent } from '@sveltejs/kit';

import { API_BASE, API_BEARER_TOKEN } from '$lib/shared/_apiUtils';

const base = API_BASE;
const bearer_token = API_BEARER_TOKEN;
const bearer = 'Bearer ' + bearer_token;

// not the best solution but it is working and fine for MVP
const queryBuilder = (params: URLSearchParams): string => {
	const status = params
		.get('status')
		.split(',')
		.map((s) => `"${s}"`);
	let query = `?query={"status":[${status}]}`;
	query += `&limit=${params.get('limit')}`;
	query += `&offset=${params.get('offset')}`;
	query += '&include=handling_group';
	return query;
};

export async function api(event: RequestEvent): Promise<EndpointOutput> {
	const query = queryBuilder(event.url.searchParams);
	const res = await fetch(`${base}/stock-pickings${query}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: bearer
		}
	});

	const result = await res.json();

	return {
		status: res.status,
		body: await result.data.slice(0, 7)
	};
}
