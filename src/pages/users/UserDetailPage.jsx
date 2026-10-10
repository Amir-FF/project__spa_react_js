import { useParams } from "react-router";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import UserCard from "../../components/users/UserCard";
import { API_ENDPOINTS } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { isNumericId } from "../../utils/validators";
import NotFoundPage from "../NotFoundPage";

const UserDetailPage = () => {
  const { id } = useParams();
  const isValidId = isNumericId(id);

  // A `null` url skips the request when the id is not numeric.
  const {
    data: user,
    error,
    isLoading,
  } = useFetch(isValidId ? API_ENDPOINTS.user(id) : null);

  if (!isValidId || error?.status === 404) return <NotFoundPage />;
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="cards-grid">
      <UserCard user={user} />
    </div>
  );
};

export default UserDetailPage;
