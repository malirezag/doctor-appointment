import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Contact from "./ui/Contact";
import NotFound from "./ui/NotFound";
import Specialities from "./pages/Specialities";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import LoginForm from "./ui/LoginForm";
import { Toaster } from "react-hot-toast";
import Appointments from "./pages/Appointments";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<AppLayout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/appointment" element={<Appointments />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster />
    </Provider>
  );
}

export default App;
