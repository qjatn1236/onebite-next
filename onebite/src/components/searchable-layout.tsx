import style from "./searchable-layout.module.css";

import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function SearchalbeLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/movie?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} type="text" placeholder="검색어를 입력하세요..." />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
