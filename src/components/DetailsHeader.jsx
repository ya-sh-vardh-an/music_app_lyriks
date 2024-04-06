const DetailsHeader = ({ songData, artistData }) => {
  console.log(artistData);
  return songData ? (
    <div className="mb-10">
      <h2 className="text-white text-3xl font-bold">Info:</h2>
      <div className="flex flex-col items-center justify-center mt-5">
        <img src={songData?.album?.cover_big} alt="album" className="rounded-full w-240 my-10 ring-white" />
        <p className="text-white text-2xl font-bold">Artist Name: <span className="text-gray-300 font-thin">{songData?.artist?.name}</span></p>
        <p className="text-white text-2xl font-bold">Song title: <span className="text-gray-300 font-thin">{songData?.title}</span></p>
        <p className="text-white text-2xl font-bold">Album: <span className="text-gray-300 font-thin">{songData?.album?.title}</span></p>
        <p className="text-white text-2xl font-bold">Link(Full music): <a href="https://www.deezer.com/track/570478722" className="hover:text-[#3294c2] focus:text-purple-600" target="_blanks">Click me to see music video</a></p>
      </div>
    </div>
  ) : (
    <div className="mb-10">
      <h2 className="text-white text-3xl font-bold">Artist Info:</h2>
      <div className="flex flex-col items-center justify-center mt-5">
        <img src={artistData?.picture_big} alt="album" className="rounded-full w-240 my-10 ring-white" />
        <p className="text-white text-2xl font-bold">Artist Name: <span className="text-gray-300 font-thin">{artistData?.name}</span></p>
        <p className="text-white text-2xl font-bold">Number of Albums: <span className="text-gray-300 font-thin">{artistData?.nb_album}</span></p>
        <p className="text-white text-2xl font-bold">More Info: <a href="https://api.deezer.com/artist/3384/top?limit=50" className="hover:text-[#3294c2] focus:text-purple-600" target="_blanks">Click for more</a></p>
      </div>
    </div>
  )
};

export default DetailsHeader;
