export default function Post() {
  return (
    <article className="post">
      <header>
        <img className="post__thumbnail" src="#" alt="포스트 썸네일"></img>
      </header>

      <section className="post__section">
        <div className="post__header">
          <h3 className="post__title">포스트 타이틀</h3>
          <time className="post__date">포스트 날짜</time>
        </div>

        <div className="post__contents">
          <p className="post__content">포스트 내용</p>
        </div>

        <div className="post__footer">
          <div className="post__profile">
            <img className="post__profile--img" src="#" alt="프로필 사진" />
            <span className="post__author">포스트 작성자</span>
          </div>

          <div className="post__buttons">
            <button className="post__button post__button--modify">수정</button>
            <button className="post__button post__button--delete">삭제</button>
          </div>
        </div>
      </section>
    </article>
  );
}
