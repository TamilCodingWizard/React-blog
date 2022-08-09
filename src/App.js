import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home";
import Createpost from "./screens/createpost/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createpost />} />
            <Route path="/post/:id" element={<Postdetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
