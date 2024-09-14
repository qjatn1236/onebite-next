import SearchalbeLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

import MovieItem from "@/components/movie-item";
import fetchMoive from "@/lib/fetch-movie";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const q = context.query.q;
  const movies = await fetchMoive(q as string);

  return {
    props: { movies },
  };
};

export default function Page({ movies }: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchalbeLayout>{page}</SearchalbeLayout>;
};
