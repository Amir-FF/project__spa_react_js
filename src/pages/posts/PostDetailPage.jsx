import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ToastList from "../../components/common/ToastList";
import PostCard from "../../components/posts/PostCard";
import { API_ENDPOINTS } from "../../constants/api";
import { ROUTES } from "../../constants/routes";
import { useFetch } from "../../hooks/useFetch";
import { useToasts } from "../../hooks/useToasts";
import { deletePost } from "../../services/postService";
import { isNumericId } from "../../utils/validators";
import NotFoundPage from "../NotFoundPage";

const PostDetailPage = () => {
  const { id } = useParams();
  const isValidId = isNumericId(id);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toasts, addToast, removeToast } = useToasts();

  // A `null` url skips the request when the id is not numeric.
  const {
    data: post,
    error,
    isLoading,
  } = useFetch(isValidId ? API_ENDPOINTS.post(id) : null);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deletePost(id);
      addToast(`Post ${id} deleted successfully`, "warning");
    } catch (err) {
      addToast(err.message, "danger");
    } finally {
      setIsDeleting(false);
    }
  };

  if (!isValidId || error?.status === 404) return <NotFoundPage />;
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <div className="cards-grid">
        <PostCard
          post={post}
          actions={
            <div className="d-flex gap-3">
              <Button
                onClick={handleDelete}
                disabled={isDeleting}
                variant="danger"
                className="py-2 px-3"
              >
                Delete
              </Button>
              <Button
                as={Link}
                to={ROUTES.editPost(post.id)}
                variant="success"
                className="py-2 px-3"
              >
                Edit
              </Button>
            </div>
          }
        />
      </div>

      <ToastList toasts={toasts} onClose={removeToast} />
    </>
  );
};

export default PostDetailPage;
