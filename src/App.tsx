import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { About } from "./pages/About";
import { Nav } from "./Nav/Nav";
import Test from "./pages/Test";
import { Footer } from "./Footer/Footer";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
