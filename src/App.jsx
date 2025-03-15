import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Contact from "./ui/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
