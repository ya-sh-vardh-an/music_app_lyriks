import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();
  // const activeSong = 'Test';

  const handlePauseClick = () => {
    dispatch(playPause(false));

  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 
  backdrop-blur-sm animate slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.id === song.id ? 'flex bg-black bg-opcaity-70' : 'hidden'}`}>
        <PlayPause
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </div>
      <img src={song?.album.cover_big} alt="song_img" />
    </div>
    <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.id}`}>
            {song.title_short}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artist ? `/artists/${song?.artist?.id}` : '/top-artists'}>
            {song.artist.name}
          </Link>
        </p>
      </div>
  </div>
)};

export default SongCard;
