import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
  const { data: relatedSongs, isFetching: isFetchingrelatedSongs, error } = useGetSongRelatedQuery({ songName: songData?.artist?.name });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: songData, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingrelatedSongs) {
    return (
      <Loader
        title="Searching song details..."
      />
    )
  }
  if (error) return <Error />
  // console.log("data", songData);
  console.log('newSongs', relatedSongs)

  return(
    <div className="flex flex-col">
      <DetailsHeader 
        songData={songData}
      />
      <RelatedSongs
        data={relatedSongs}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
