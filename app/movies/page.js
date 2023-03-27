import { apiRequests } from "@/configs/api";
import Movie from "@/app/Movie";
import Link from "next/link";

const getAllMovies = async (page) => {
    const data = await fetch(`${apiRequests.getMovies}/?page=${page}`);
    const movies = await data.json();
    return movies;
}

async function Movies({ searchParams }) {
    const { data: movies, metadata } = await getAllMovies(+searchParams.page);

    const currentPage = +searchParams.page ? +searchParams.page : 1;

    return (
        <div className="flex flex-col space-y-4">
            <div className="space-x-3">
                <Link href={`/movies?page=${currentPage > 1 ? currentPage - 1 : 1}`}>prev page</Link>
                <Link href={`/movies?page=${currentPage < metadata.page_count ? currentPage + 1 : metadata.page_count}`}>next page</Link>
            </div>
            <div className="grid gap-16 grid-cols-fluid justify-center">
                {movies.map((movie) => (
                    <Movie movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Movies