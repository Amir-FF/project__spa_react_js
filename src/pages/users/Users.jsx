import { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("page " + res.status + ": not found!");

        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setErrMessage(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Col xs={12} className="mb-4">
        <h1 className="fs-5 fw-bold">Users:</h1>
      </Col>

      <div className="cards-grid">
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {errMessage && <h2>{errMessage}</h2>}
        {users &&
          users.map((user) => (
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
          ))}
      </div>
    </>
  );
};

export default Users;
