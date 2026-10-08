import { useEffect, useState } from "react";
import { Button, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("page " + res.status + ": not found!");

        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setErrMessage(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Col xs={12} className="mb-4">
        <h1 className="fs-5 fw-bold">Posts:</h1>
      </Col>

      <Col xs={12} className="mb-4">
        <Button variant="primary" className="py-2 px-3 me-3">
          Create Post
        </Button>
      </Col>

      <div className="cards-grid">
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {errMessage && <h2>{errMessage}</h2>}
        {posts &&
          posts.map((post) => (
            <Col key={post.id}>
              <ListGroup>
                <ListGroup.Item variant="primary" className="py-2 px-3">
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </ListGroup.Item>
                <ListGroup.Item className="py-2 px-3">
                  {post.body}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          ))}
      </div>
    </>
  );
};

export default Posts;
