import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '@/components/loading/Spinner';

import { usePostQuery } from '@/hooks/queries/usePostQuery';
import { useDeletePost } from '@/utils/onDelete';

import { AuthContext } from '@/store/contextAPI/AuthProvider';
import NotFoundPage from '@/pages/notfound';
import { onEdit } from '@/utils/onEdit';
import { COMMON } from '@/constants/common/common';

export default function PostDetail() {
  const { id } = useParams();
  const { post, isFetching, isError } = usePostQuery(id!);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { onDelete } = useDeletePost();

  if (isError) {
    // TODO 잘못된 경로(404) 외에 다른 에러일 경우는 어떻게 처리 ?
    return <NotFoundPage />;
  }

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
                <button
                  onClick={onEdit(id!, navigate)}
                  className="post__button post__button--modify"
                >
                  {COMMON.MODIFICATION}
                </button>
                <button onClick={onDelete(id!)} className="post__button post__button--delete">
                  {COMMON.DELETE}
                </button>
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
