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
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
