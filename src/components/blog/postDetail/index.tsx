export default function PostDetail() {
  return (
    <article className="post__detail">
      <div className="post__header">
        <div>
          <h2 className="post__title">포스트 타이틀</h2>
          <time className="post__date">포스트 날짜</time>
        </div>

        <div className="post__buttons">
          <button className="post__button post__button--modify">수정</button>
          <button className="post__button post__button--delete">삭제</button>
        </div>
      </div>

      <div className="post__profile">
        <img className="post__profile--img" src="#" alt="프로필 사진" />
        <span className="post__author">포스트 작성자</span>
      </div>

      <div className="post__contents">
        <p className="post__content">포스트 내용</p>
      </div>
    </article>
  );
}
