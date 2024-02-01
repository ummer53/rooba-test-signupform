import { baseApi } from './baseApi';

export interface SignUpRequest {
	email: string;
	name: string;
	country: string;
	password: string;
}

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		signUp: build.mutation<string, SignUpRequest>({
			query: (credentials: SignUpRequest) => ({
				url: '/users',
				method: 'POST',
				body: JSON.stringify(credentials),
			}),
		}),
	}),

	overrideExisting: true,
});

export const { useSignUpMutation } = authApi;
