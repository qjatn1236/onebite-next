import SearchalbeLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-item";
import { useRouter } from "next/router";
import { MovieData } from "@/types";

const getFilterMovie = (movies: MovieData[], query: string) => {
  return movies.filter((movie) => movie.title.includes(query));
};

export default function Page() {
  const router = useRouter();
  const q = router.query.q as string;

  const getFilterResult = getFilterMovie(movies, q);
  console.log(getFilterResult);

  return (
    <div>
      {getFilterResult.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}

      {/* {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))} */}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
