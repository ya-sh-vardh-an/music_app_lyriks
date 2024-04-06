import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Search = () => {

  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery(searchTerm);
  
  // const songs =data

  if (isFetching) return <Loader title="Loading songs around you..." />;
  if (error) return <Error />;
  return (
    <div className='flex flex-col'>
      <h2 className='font-semibold text-3xl text-white text-left mt-4 mb-10'>
        Showing result for <span className='font-black'>
          {searchTerm}
        </span>
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.data?.slice(0, 24).map((song, i) => (
          <SongCard
            key={song?.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
};

export default Search;
