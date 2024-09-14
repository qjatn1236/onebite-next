import style from "./index.module.css";
import SearchalbeLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import { InferGetServerSidePropsType } from "next";
import MovieItem from "@/components/movie-item";

import fetchMoive from "@/lib/fetch-movie";
import fetchRandomMovies from "@/lib/fetch-random";

export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([fetchMoive(), fetchRandomMovies()]);

  return {
    props: { allMovies, recoMovies },
  };
};

export default function Home({ allMovies, recoMovies }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 영화</h3>
        <div className={style.recoConatiner}>
          {recoMovies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allContainer}>
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
