export const ROUTES = {
  home: "/",
  users: "/users",
  posts: "/posts",
  createPost: "/posts/create",
  editPost: (id) => `/posts/edit/${id}`,
  user: (id) => `/users/${id}`,
  post: (id) => `/posts/${id}`,
};
