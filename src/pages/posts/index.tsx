import { useState } from 'react';

import PostMenu from '@/components/blog/postMenu';
import Spinner from '@/components/loading/Spinner';
import Posts from '@/components/posts';
import NoData from '@/components/noData';
import { TabLabel } from '@/components/blog/postMenu/constants/menuItems';

import { usePostsQuery } from '@/hooks/queries/usePostsQuery';

export default function PostsPage() {
  const [activeTab, setActiveTab] = useState<TabLabel>('new');
  const { posts, isFetching } = usePostsQuery(activeTab);

  const onClickTabMenu = (label: TabLabel) => () => {
    setActiveTab(label);
  };

  return (
    <>
      <PostMenu activeTab={activeTab} onClick={onClickTabMenu} />

      {isFetching ? (
        <Spinner />
      ) : (
        <div className="posts__container">
          {posts.length > 0 ? <Posts posts={posts} /> : <NoData />}
        </div>
      )}
    </>
  );
}
