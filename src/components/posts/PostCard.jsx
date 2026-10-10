import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import { ROUTES } from "../../constants/routes";

// `actions` is optional: buttons rendered in an extra row at the bottom.
const PostCard = ({ post, actions }) => (
  <ListGroup>
    <ListGroup.Item variant="primary">
      <Link to={ROUTES.post(post.id)}>{post.title}</Link>
    </ListGroup.Item>
    <ListGroup.Item>{post.body}</ListGroup.Item>
    {actions && <ListGroup.Item variant="primary">{actions}</ListGroup.Item>}
  </ListGroup>
);

export default PostCard;
