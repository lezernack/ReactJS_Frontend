import bootswatch from "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import RecordList from "./components/RecordList";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/delete/:id" element={<RecordList />} />
      </Routes>
    </div>
  );
}

export default App;
