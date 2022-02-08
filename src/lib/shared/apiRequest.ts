import type { RequestHandler } from '@sveltejs/kit';
import type { EndpointOutput, RequestEvent } from '@sveltejs/kit';

export const requestFactory = (api: (event: RequestEvent) =>  Promise<EndpointOutput>): RequestHandler => async (event) => {
    const response = await api(event);

	if (response.status === 404) {
		return { body: [] };
	}

	return response;
}
