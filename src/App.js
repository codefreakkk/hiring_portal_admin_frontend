import { Routes, BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dash_routes from "./Dash_routes";
import Findjobs from "./user_components/Findjobs";
import Home from "./user_components/Home";

function App() {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <Routes>
          <Route path="/findjobs" element={<Findjobs/>} />
          <Route path="/" element={<Home/>} />
          {/* dashboard panel */}
          <Route path="/dashboard/*" element={<Dash_routes/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* footer */}
    </>
  );
}

export default App;
