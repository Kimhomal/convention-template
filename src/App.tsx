import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Agent from './components/agent';

import './App.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Agent />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
