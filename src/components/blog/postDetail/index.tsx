import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '@/components/loading/Spinner';

import { usePostQuery } from '@/hooks/queries/usePostQuery';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

export default function PostDetail() {
  const { id } = useParams();
  const { post, isFetching } = usePostQuery(id!);
  const { user } = useContext(AuthContext);

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
            {user?.email === post.author && (
              <div className="post__buttons">
                <button className="post__button post__button--modify">수정</button>
                <button className="post__button post__button--delete">삭제</button>
              </div>
            )}
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
