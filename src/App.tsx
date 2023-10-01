import ApplicationRouter from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./helpers/axios-mock";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationRouter />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
