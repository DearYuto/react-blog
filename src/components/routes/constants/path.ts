const basePath = {
  root: '/',
  posts: '/posts',
  write: '/write',
  mypage: '/mypage',
  etc: '*',
} as const;

export const PATH = {
  ...basePath,
  post: `${basePath.posts}/:id`,
} as const;
