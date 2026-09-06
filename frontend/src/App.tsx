import {BrowserRouter, Routes, Route } from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Registration from "./pages/Register";

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path ="/registration" element={<Registration />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )

}