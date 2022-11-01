import { Routes, BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dash_routes from "./Dash_routes";

function App() {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dash_routes/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* footer */}
    </>
  );
}

export default App;
