const basePath = {
  root: '/',
  posts: '/posts',
  write: '/write',
  mypage: '/mypage',
  auth: '/auth',
  etc: '*',
} as const;

export const PATH = {
  ...basePath,
  post: `${basePath.posts}/:id`,
  login: `${basePath.auth}/login`,
  join: `${basePath.auth}/join`,
  modify: `${basePath.write}/:id`,
} as const;
