import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong } from "../redux/features/playerSlice";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";



const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetchingArtistDetails, } = useGetArtistDetailsQuery({ artistId })
  const { data: relatedSongs, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songName: artistData?.name })

  if (isFetchingArtistDetails || isFetchingRelatedSongs) {
    return (
      <Loader
        title="Searching artist details..."
      />
    )
  }
  if (error) return <Error />;
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: relatedSongs, i }));
    dispatch(playPause(true));
  };
  // console.log("data", songData);
  console.log('newSongs', relatedSongs)

  return(
    <div className="flex flex-col">
      <DetailsHeader 
        artistId={artistId}
        artistData={artistData}
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

export default ArtistDetails;
