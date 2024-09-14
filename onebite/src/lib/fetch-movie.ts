import { MoviesData } from "@/types";

export default async function fetchMoive(q?: string): Promise<MoviesData[]> {
  let url = `http://localhost:12345/movie`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
