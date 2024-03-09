const basePath = {
  root: '/',
  posts: '/posts',
} as const;

export const PATH = {
  ...basePath,
  post: `${basePath.posts}/:id`,
} as const;
