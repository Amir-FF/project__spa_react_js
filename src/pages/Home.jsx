import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const redirectToPostsPage = () => {
    navigate("/posts");
  };

  const redirectToUsersPage = () => {
    navigate("/users");
  };

  return (
    <>
      <Col xs={12} className="mb-4 ">
        <h1 className="fs-5 fw-bold">SPA (Single Page Application) App</h1>
      </Col>

      <Col xs={12}>
        <p className="w-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          tenetur cupiditate porro ipsam repellendus, fuga sit facere, esse
          alias itaque dicta vero? Voluptate, tenetur ducimus. Consequatur
          quidem sapiente expedita quo.
        </p>
      </Col>

      <Col xs={12} className="mt-4">
        <Button
          onClick={redirectToPostsPage}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          Posts
        </Button>
        <Button
          onClick={redirectToUsersPage}
          variant="outline-primary"
          className="py-2 px-3 me-3"
        >
          Users
        </Button>
      </Col>
    </>
  );
};

export default Home;
