import "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import RecordList from "./components/RecordList";
import Create from "./components/Create.jsx";
import Edit from "./components/Edit.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/" element={<Create />} />
        <Route exact path="/" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
