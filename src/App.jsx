import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Contact from "./ui/Contact";
import NotFound from "./ui/NotFound";
import Speciality from "./pages/Speciality";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
