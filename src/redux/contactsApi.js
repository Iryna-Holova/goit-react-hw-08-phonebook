import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);
      return headers;
    },
  }),
  tagTypes: ['Contacts', ],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query(body) {
        return {
          url: `/contacts`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query(contact) {
        return {
          url: `/contacts/${contact.id}`,
          method: 'PATCH',
          body: {'name': contact.name, 'number': contact.number},
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useEditContactMutation } = contactsApi;