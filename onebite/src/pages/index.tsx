import style from "./index.module.css";
import SearchalbeLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-item";

export default function Home() {
  return (
    <div className={style.container}>
      {/* <section>
        <h3>지금 추천하는 영화</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section> */}

      <section>
        <h3>지금 추천하는 영화</h3>
        <div className={style.recoConatiner}>
          {movies.slice(0, 3).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allContainer}>
          {movies.map((movie) => (
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
