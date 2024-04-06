
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

  const { data, isFetching, error } = useGetTopChartsQuery('pop songs');
  

  if (isFetching) return <Loader title="Loading songs around you..." />;
  if (error) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Top Artists
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.data?.slice(0, 24).map((track, i) => (
          <ArtistCard
            key={track?.id}
            track={track}
          />
        ))}
      </div>
    </div>
  )
};

export default TopArtists;
