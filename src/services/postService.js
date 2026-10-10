import { API_ENDPOINTS } from "../constants/api";
import { request } from "./http";

const JSON_HEADERS = { "Content-Type": "application/json" };

export const createPost = (post) =>
  request(API_ENDPOINTS.posts, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify({ ...post, userId: 1 }),
  });

export const updatePost = (post) =>
  request(API_ENDPOINTS.post(post.id), {
    method: "PUT",
    headers: JSON_HEADERS,
    body: JSON.stringify(post),
  });

export const deletePost = (id) =>
  request(API_ENDPOINTS.post(id), { method: "DELETE" });
