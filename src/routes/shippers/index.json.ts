import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import { requestFactory } from '$lib/shared/apiRequest';

// GET /shippers.json
export const get: RequestHandler = requestFactory(api)
