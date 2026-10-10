import { Button } from "react-bootstrap";
import { Link } from "react-router";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import PageTitle from "../../components/common/PageTitle";
import PostCard from "../../components/posts/PostCard";
import { API_ENDPOINTS } from "../../constants/api";
import { ROUTES } from "../../constants/routes";
import { useFetch } from "../../hooks/useFetch";

const PostsPage = () => {
  const { data: posts, error, isLoading } = useFetch(API_ENDPOINTS.posts);

  return (
    <>
      <PageTitle>Posts:</PageTitle>

      <div className="mb-4">
        <Button
          as={Link}
          to={ROUTES.createPost}
          variant="primary"
          className="py-2 px-3"
        >
          Create Post
        </Button>
      </div>

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error.message} />}

      {posts && (
        <div className="cards-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostsPage;
