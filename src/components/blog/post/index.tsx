import { useContext } from 'react';
import { IPost } from '@/api/post/getPosts';
import { AuthContext } from '@/store/contextAPI/AuthProvider';

type Props = {
  onClick?: () => void;
} & IPost;

export default function Post({ title, content, author, createAt, onClick }: Props) {
  const { user } = useContext(AuthContext);

  const onEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
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
              <button onClick={onDelete} className="post__button post__button--delete">
                삭제
              </button>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
