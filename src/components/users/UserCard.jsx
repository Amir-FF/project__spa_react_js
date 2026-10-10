import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { ROUTES } from "../../constants/routes";

const UserCard = ({ user }) => (
  <ListGroup>
    <ListGroup.Item variant="primary">
      <Link to={ROUTES.user(user.id)}>{user.name}</Link>
    </ListGroup.Item>
    <ListGroup.Item>Username: {user.username}</ListGroup.Item>
    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
  </ListGroup>
);

export default UserCard;
