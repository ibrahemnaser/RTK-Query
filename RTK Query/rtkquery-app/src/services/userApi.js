import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userAPI = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),

  tagTypes: ["Users"], // make a relation between query and mutation

  endpoints: (builder) => ({
    // all users
    getUsers: builder.query({
      query: () => `users`,
      //
      transformResponse: (res) => {
        return res.sort((a, b) => b.id - a.id);
      },
      providesTags: ["Users"],
    }),
    // single user
    getUser: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["Users"],
    }),
    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */

    // Mutation
    addNewUser: builder.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Users"],
    }),
    /**
     *
     *
     */
    // with pagination
    getUsersWithPage: builder.query({
      query: (page = 1) => `users?_page=${page}&_limit=5`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: (args) => {
        // console.log(args);
        return args.endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        console.log(newItems);
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useGetUsersWithPageQuery,
} = userAPI;
