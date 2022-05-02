import { FC } from 'react'
import Image from 'next/image'
import { IMovie } from '../types/movie'

interface IThumbnailProps {
  movie: IMovie
  // movie: IMovie | DocumentData // the latter will be required for Firebase
}

const Thumbnail: FC<IThumbnailProps> = ({ movie }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/'

  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
