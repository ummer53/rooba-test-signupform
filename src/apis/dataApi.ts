import { baseApi } from './baseApi';

export interface User {
	_id: string;
	name: string;
	email: string;
	age: number;
	country: string;
}

export interface Stats {
	totalUsers: number;
	averageAge: number;
	uniqueCountries: number;
}

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUser: build.query<User, string>({
			query: (id) => ({
				url: '/users/' + id,
				method: 'GET',
			}),

			providesTags: ['Data'],
		}),
		getUsers: build.query<User[], null>({
			query: () => ({
				url: '/users',
				method: 'GET',
			}),

			providesTags: ['Data'],
		}),

		updateUser: build.mutation<User[], Partial<User>>({
			query: (body) => ({
				url: '/users/' + body._id,
				method: 'PUT',
				body: JSON.stringify(body),
			}),

			invalidatesTags: ['Data'],
		}),
		deleteUser: build.mutation<string, string>({
			query: (id: string) => ({
				url: '/users/' + id,
				method: 'DELETE',
			}),

			invalidatesTags: ['Data'],
		}),
		getStats: build.query<Stats[], null>({
			query: () => ({
				url: '/stats',
				method: 'GET',
			}),

			providesTags: ['Stats', 'Data'],
		}),
	}),

	overrideExisting: true,
});

export const {
	useGetUsersQuery,
	useUpdateUserMutation,
	useDeleteUserMutation,
	useGetStatsQuery,
	useGetUserQuery,
} = authApi;
