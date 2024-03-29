import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/components/router/constants/path';

import { IPost } from '@/api/post/getPosts';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

import { useDeletePost } from '@/utils/onDelete';

type Props = {
  onClick?: () => void;
} & IPost;

export default function Post({ id, title, content, author, createAt, onClick }: Props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { onDelete } = useDeletePost();

  const onEdit = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!id) return;

    navigate(`${PATH.write}/${id}`);
  };

  return (
    <article className="post" onClick={onClick}>
      <header>
        <img className="post__thumbnail" src="#" alt="포스트 썸네일"></img>
      </header>

      <section className="post__section">
        <div className="post__header">
          <h3 className="post__title">{title}</h3>
          <time className="post__date">{createAt}</time>
        </div>

        <div className="post__contents">
          <p className="post__content">{content}</p>
        </div>

        <div className="post__footer">
          <div className="post__profile">
            <img className="post__profile--img" src="#" alt="프로필 사진" />
            <span className="post__author">{author}</span>
          </div>

          {author === user?.email && (
            <div className="post__buttons">
              <button onClick={onEdit} className="post__button post__button--modify">
                수정
              </button>
              {/* // TODO Delete 시 mutation 처리 ? */}
              <button onClick={onDelete(id)} className="post__button post__button--delete">
                삭제
              </button>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
