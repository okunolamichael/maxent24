import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const omdbApiKey = process.env.OMDB_KEY;
const page = 1;
// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const omdbApi = createApi({
    reducerPath: 'omdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        // Get Movies by [Type]
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=${omdbApiKey}`,
        }),
    }),
});

export const { useGetMoviesQuery } = omdbApi;