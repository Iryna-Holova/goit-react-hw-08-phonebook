import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const connectionsApi = createApi({
    reducerPath: 'connectionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const { token = '' } = getState().user;
            headers.set('Authorization', token);
            return headers;
        },
    }),

    tagTypes: ['User'],
    endpoints: builder => ({
        getUser: builder.query({
            query: () => '/users/current',
            providesTags: ['User'],
        }),
        signupUser: builder.mutation({
            query(body) {
                return {
                    url: `/users/signup`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['User'],
        }),
        loginUser: builder.mutation({
            query(body) {
                return {
                    url: `/users/login`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['User'],
        }),
        logoutUser: builder.mutation({
            query(body) {
                return {
                    url: `/users/logout`,
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: ['User'],
        }),
    })
});

export const {
    useGetUserQuery,
    useSignupUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
} = connectionsApi;