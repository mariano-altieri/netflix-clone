import Head from 'next/head'
import { FC } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { Row } from '../components/Row'
import { IMovie } from '../types/movie'
import { fetchHomeMovies } from './api/movies'

interface IHomeProps {
  netflixOriginals: IMovie[]
  trendingNow: IMovie[]
  topRated: IMovie[]
  actionMovies: IMovie[]
  comedyMovies: IMovie[]
  horrorMovies: IMovie[]
  romanceMovies: IMovie[]
  documentaries: IMovie[]
}

const Home: FC<IHomeProps> = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home -Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-4 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  return { props: await fetchHomeMovies() }
}
