import { useParams } from "react-router";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import PageTitle from "../../components/common/PageTitle";
import ToastList from "../../components/common/ToastList";
import PostForm from "../../components/posts/PostForm";
import { API_ENDPOINTS } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { useToasts } from "../../hooks/useToasts";
import { updatePost } from "../../services/postService";
import { isNumericId } from "../../utils/validators";
import NotFoundPage from "../NotFoundPage";

const EditPostPage = () => {
  const { id } = useParams();
  const isValidId = isNumericId(id);
  const { toasts, addToast, removeToast } = useToasts();

  const {
    data: post,
    error,
    isLoading,
  } = useFetch(isValidId ? API_ENDPOINTS.post(id) : null);

  if (!isValidId || error?.status === 404) return <NotFoundPage />;
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  const handleUpdate = async (formData) => {
    await updatePost({ ...post, ...formData });
    addToast("Post updated successfully");
  };

  return (
    <>
      <PageTitle>Edit Post:</PageTitle>

      {/* PostForm reads initialValues once, and `post` is already loaded here. */}
      <PostForm
        initialValues={{ title: post.title, body: post.body }}
        onSubmit={handleUpdate}
        submitLabel="Edit Post"
        submittingLabel="Saving..."
      />

      <ToastList toasts={toasts} onClose={removeToast} />
    </>
  );
};

export default EditPostPage;
