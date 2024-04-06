import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'cf2b688c46msh5533b772ac40f68p181c0cjsnb8956441e15a',
//     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//   }
// };

// fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=world%20top%20songs', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
export const linkConverter = (link) => {
  const newLink = link.replace(' ', '%20');
  return newLink;
};

export const deezerCoreApi = createApi({
  reducerPath: 'deezerCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'cf2b688c46msh5533b772ac40f68p181c0cjsnb8956441e15a');
      headers.set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: (query = false) => `/search?q=${query ? linkConverter(query) : 'new%20songs'}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `track/${songid}` }),
    getSongRelated: builder.query({ query: ({ songName }) => `/search?q=${linkConverter(songName)}` }),
    getArtistDetails: builder.query({ query: ({ artistId }) => `/artist/${artistId}` }),
    getSongsByGenre: builder.query({ query: (genre) => `/search?q=${genre}%20songs` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByGenreQuery,
} = deezerCoreApi;
