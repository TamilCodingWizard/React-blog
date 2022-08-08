import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./screens/home/Home"; 
import Createpost from './screens/createpost/Createpost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" component={<Home/>}/>
          <Route path="/create" component={<Createpost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
