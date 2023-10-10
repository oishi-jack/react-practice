import { Header } from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Detail from "./pages/Detail";
import FetchData from "./components/FetchData";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="/home" element={<Detail />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>

   
  );
}

export default App;
