import Post from '@/components/post';

export default function PostsPage() {
  return (
    <div>
      {[
        Array(20)
          .fill(0)
          .map((_, i) => {
            return <Post key={i} />;
          }),
      ]}
    </div>
  );
}
