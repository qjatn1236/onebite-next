import style from "./[id].module.css";
const mockData = {
  id: 1,
  title: "코코",
  subTitle: "애니메이션",
  description:
    "뮤지션을 꿈꾸는 소년 미구엘은 전설적인 가수 에르네스토의 기타에 손을 댔다 ‘죽은 자들의 세상’에 들어가게 된다. 그리고 그곳에서 만난 의문의 사나이 헥터와 함께 상상조차 못했던 모험을 시작하게 되는데… 과연 ‘죽은 자들의 세상’에 숨겨진 비밀은? 그리고 미구엘은 무사히 현실로 돌아올 수 있을까?",
  author: "리 언크리치",
  coverImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20171222_56%2F1513906341368blx3Q_JPEG%2Fmovie_image.jpg",
};

export default function Page() {
  const { title, subTitle, author, description, coverImgUrl } = mockData;

  return (
    <div className={style.container}>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>{author}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
