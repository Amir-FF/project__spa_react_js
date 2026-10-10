import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetailPage from "./pages/posts/PostDetailPage";
import PostsPage from "./pages/posts/PostsPage";
import UserDetailPage from "./pages/users/UserDetailPage";
import UsersPage from "./pages/users/UsersPage";
import CreatePostPage from "./pages/posts/CreatePostPage";
import EditPostPage from "./pages/posts/EditPostPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="users">
          <Route index element={<UsersPage />} />
          <Route path=":id" element={<UserDetailPage />} />
        </Route>

        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path=":id" element={<PostDetailPage />} />
          <Route path="create" element={<CreatePostPage />} />
          <Route path="edit/:id" element={<EditPostPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
