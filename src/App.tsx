import ApplicationRouter from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./helpers/axios-mock";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationRouter />
    </QueryClientProvider>
  );
}

export default App;
