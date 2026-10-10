import { Button } from "react-bootstrap";
import { Link } from "react-router";
import PageTitle from "../components/common/PageTitle";
import { ROUTES } from "../constants/routes";

const HomePage = () => (
  <>
    <PageTitle>SPA (Single Page Application) App</PageTitle>

    <p className="col-md-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      tenetur cupiditate porro ipsam repellendus, fuga sit facere, esse alias
      itaque dicta vero? Voluptate, tenetur ducimus. Consequatur quidem
      sapiente expedita quo.
    </p>

    <div className="d-flex gap-3 mt-4">
      <Button as={Link} to={ROUTES.posts} variant="primary" className="py-2 px-3">
        Posts
      </Button>
      <Button
        as={Link}
        to={ROUTES.users}
        variant="outline-primary"
        className="py-2 px-3"
      >
        Users
      </Button>
    </div>
  </>
);

export default HomePage;
