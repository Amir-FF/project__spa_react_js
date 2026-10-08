import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import NotFound from "../NotFound";
import { Col, ListGroup } from "react-bootstrap";

const User = () => {
  // codes

  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const isValid = /^\d+$/.test(id);

  useEffect(() => {
    if (!isValid) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("page " + res.status + ": not found!");

        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id, isValid]);

  if (!isValid || notFound) return <NotFound />;

  return (
    <>
      <div className="cards-grid">
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {user && (
          <Col key={user.id}>
            <ListGroup>
              <ListGroup.Item variant="primary" className="py-2 px-3">
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </ListGroup.Item>
              <ListGroup.Item className="py-2 px-3">
                Username: {user.username}
              </ListGroup.Item>
              <ListGroup.Item className="py-2 px-3">
                Email: {user.email}
              </ListGroup.Item>
              <ListGroup.Item className="py-2 px-3">
                Phone: {user.phone}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        )}
      </div>
    </>
  );
};

export default User;
