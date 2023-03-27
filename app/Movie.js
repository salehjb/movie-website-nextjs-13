import Image from "next/image"
import Link from "next/link"

function Movie({ movie }) {
    return (
        <div className="flex flex-col gap-3">
            <Link href={`/movies/${movie.id}`}>
                <Image src={movie.poster} alt="poster" width={300} height={300} />
            </Link>
            <h1>{movie.title}</h1>
        </div>
    )
}

export default Movie