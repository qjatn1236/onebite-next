import { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css";

export default function MovieItem({ id, title, subTitle, author, coverImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>{author}</div>
      </div>
    </Link>
  );
}
