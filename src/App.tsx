import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Agent from './components/agent';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Agent />
    </QueryClientProvider>
  );
}

export default App;
