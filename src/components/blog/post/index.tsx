import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartFilledIcon } from '@radix-ui/react-icons';

import { IPost } from '@/api/post/getPosts';

import { AuthContext } from '@/store/contextAPI/AuthProvider';

import { useDeletePost } from '@/utils/onDelete';
import { onEdit } from '@/utils/onEdit';
import { COMMON } from '@/constants/common/common';

type Props = {
  onClick?: () => void;
} & IPost;

export default function Post({
  id,
  title,
  content,
  author,
  createAt,
  onClick,
  likeCount = 0,
}: Props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { onDelete } = useDeletePost();

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

          <div>
            <div className="post__like-display">
              <HeartFilledIcon />
              <span>{likeCount}</span>
            </div>

            {author === user?.email && (
              <div className="post__buttons">
                <button
                  onClick={onEdit(id, navigate)}
                  className="post__button post__button--modify"
                >
                  {COMMON.MODIFICATION}
                </button>
                {/* // TODO Delete 시 mutation 처리 ? */}
                <button onClick={onDelete(id)} className="post__button post__button--delete">
                  {COMMON.DELETE}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
