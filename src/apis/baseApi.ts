'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:3001/';

import type {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	prepareHeaders: (headers) => {
		const token =
			'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2huX2RvZTE6W0FETUlOXSIsImlhdCI6MTcwNDg3MDY0MSwiZXhwIjoxNzA0OTU3MDQxfQ.viY9-N6Q4HM3lSaz6EUCKd7BvTG0tyUVO7jU0Dau7Mo';
		headers.set('Content-Type', 'application/json');
		headers.set('Accept', 'application/json');
		headers.set('Access-Control-Allow-Origin', '*');

		headers.set('Authorization', `Bearer ${token}`);

		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const result = await baseQuery(args, api, extraOptions);

	return result;
};

export const baseApi = createApi({
	reducerPath: 'baseApi',

	baseQuery: baseQueryWithReauth,

	tagTypes: ['Auth', 'Data', 'Stats'],

	endpoints: () => ({}),
});

const handleError = (error?: FetchBaseQueryError) => {
	if (!error?.status) {
		console.error(
			'An unexpected error occured while communicating with the server.'
		);
	} else if (error.status == 404) {
		alert('API error - The resource you are looking for could not be found.');
	} else if (error.status == 405) {
		alert('API error - Method not allowed.');
	} else if (error.status) {
		console.error(
			error?.data ?? 'API error - An unexpected error occured at the server.'
		);
	} else {
		console.error('API error - An unexpected error occured at the server.');
	}
};

export function transformErrorResponse(
	baseQueryReturnValue: { data: any },
	meta: any,
	arg: any
) {
	return baseQueryReturnValue.data;
}
