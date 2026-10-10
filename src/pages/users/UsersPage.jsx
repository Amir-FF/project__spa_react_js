import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import PageTitle from "../../components/common/PageTitle";
import UserCard from "../../components/users/UserCard";
import { API_ENDPOINTS } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";

const UsersPage = () => {
  const { data: users, error, isLoading } = useFetch(API_ENDPOINTS.users);

  return (
    <>
      <PageTitle>Users:</PageTitle>

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error.message} />}

      {users && (
        <div className="cards-grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default UsersPage;
