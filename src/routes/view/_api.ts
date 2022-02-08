import type { EndpointOutput, RequestEvent } from '@sveltejs/kit';

export async function api(event: RequestEvent): Promise<EndpointOutput> {
	// TODO load view config data from API
	// id 1 is shippers
	// id 2 is pickings
	let body;
	switch (event.params.id) {
		case '1':
			body = {
				type: 'shippers',
				settings: {
					shippersIds: ['19', '29', '18', '20', '9']
				}
			};
			break;
		case '2':
			body = {
				type: 'pickings',
				settings: {
					status: ['queued', 'assigned', 'exception'],
					limit: 25,
					offset: 0
				}
			};
			break;
		default:
			return { status: 404 };
			break;
	}

	return {
		status: 200,
		body
	};
}
