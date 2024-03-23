import { useParams } from 'react-router-dom';

import Spinner from '@/components/loading/Spinner';

import { usePostQuery } from '@/hooks/queries/usePostQuery';

export default function PostDetail() {
  const { id } = useParams();
  const { post, isFetching } = usePostQuery(id!);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      {!post ? (
        <Spinner />
      ) : (
        <article className="post__detail">
          <div className="post__header">
            <div>
              <h2 className="post__title">{post.title}</h2>
              <time className="post__date">{post.createAt}</time>
            </div>
            {/* // 작성자인 경우에만 수정, 삭제 추가하기 */}
            <div className="post__buttons">
              <button className="post__button post__button--modify">수정</button>
              <button className="post__button post__button--delete">삭제</button>
            </div>
          </div>

          <div className="post__profile">
            <img className="post__profile--img" src="#" alt="프로필 사진" />
            <span className="post__author">{post.author}</span>
          </div>

          <div className="post__contents">
            <p className="post__content">{post.content}</p>
          </div>
        </article>
      )}
    </>
  );
}
