import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const campingApi = createApi({
	reducerPath: 'camping', // reducerPath는 모든 state, property에 access 할 수 있는 key
	// fetchBaseQuery는 template function
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000',
	}),
	endpoints(builder) {
		return {
			// fetchCamping에 의거하여 hook name이 만들어짐
			fetchCampings: builder.query({
				query: () => {
					return {
						url: '/camps',
						method: 'GET',
					};
				},
			}),
		};
	},
});

export const { useFetchCampingsQuery } = campingApi;
export { campingApi };
