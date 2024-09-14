import { MoviesData } from "@/types";

export default async function fetchOneMovie(id: number): Promise<MoviesData | null> {
  const url = `http://localhost:12345/movie/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
