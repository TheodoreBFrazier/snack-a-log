//Import react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Pages
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Four0Four from "./Pages/Four0Four";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Index from "./Pages/Index";

// import NavBar
import NavBar from "./Components/NavBar"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route exact path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
