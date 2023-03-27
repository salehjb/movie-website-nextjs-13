import { apiRequests } from "@/configs/api"
import Image from "next/image";

const getSingleMovie = async (movieId) => {
  const data = await fetch(apiRequests.getSingleMovie(movieId));
  const movie = await data.json();
  return movie;
}

async function MovieSinglePage({ params }) {
  const movie = await getSingleMovie(params.movie);

  return (
    <div className="space-y-20">
      <div className="flex justify-between flex-wrap w-full">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <h2 className="text-lg">Released: {movie.released}</h2>
          <h2>Runtime: {movie.runtime}</h2>
          <h2>Director: {movie.director}</h2>
          <h2>Actors: {movie.actors}</h2>
          <h2>Country: {movie.country}</h2>
          <h2>Genres: <div className="space-x-1 inline-block">{movie.genres.map((genre, i) => <span key={i}>{genre}</span>)}</div></h2>
          <h2 className="bg-green-600 py-1 px-2 inline-block rounded-md">Released</h2>
        </div>
        <div className="relative">
          <Image src={movie.poster} alt="image" width={350} height={350} className="rounded-xl" />
          <div className="absolute border center font-bold border-orange-500 bg-[#151515] rounded-full w-12 h-12 -right-4 -bottom-4 text-green-600">{movie.imdb_rating}</div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl">Film Images</h2>
        <div className="flex flex-wrap justify-between">
          {movie.images?.map((image, i) => (
            <Image src={image} alt="image" width={400} height={400} className="rounded-xl" />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl">Film Description</h2>
        <p>{movie.plot}</p>
      </div>
    </div>
  )
}

export default MovieSinglePage