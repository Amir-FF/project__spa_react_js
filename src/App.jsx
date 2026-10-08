import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Post from "./pages/posts/Post";
import { Container, Row } from "react-bootstrap";
import NotFound from "./pages/NotFound";
import User from "./pages/users/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Container fluid className="mt-6 px-4">
          <Row>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/users">
                <Route index element={<Users />} />
                <Route path=":id" element={<User />} />
              </Route>

              <Route path="/posts">
                <Route index element={<Posts />} />
                <Route path=":id" element={<Post />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
