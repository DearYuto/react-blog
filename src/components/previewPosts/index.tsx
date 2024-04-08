import { IPost } from '@/api/post/getPosts';

type Props = {
  posts: IPost[];
};

const PreviewPosts = ({ posts }: Props) => {
  return (
    <div className="preview-posts">
      <h3 className="preview-posts__title">내가 작성한 글</h3>
      {/* //TODO 작성한 게시글 개수 제한해야할 듯  */}
      {posts.map((post) => {
        return (
          <div className="preview-posts__post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewPosts;
