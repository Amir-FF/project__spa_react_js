export const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const API_ENDPOINTS = {
  users: `${API_BASE_URL}/users`,
  user: (id) => `${API_BASE_URL}/users/${id}`,
  posts: `${API_BASE_URL}/posts`,
  post: (id) => `${API_BASE_URL}/posts/${id}`,
};
