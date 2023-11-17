import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Agent from './components/agent';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Agent />
    </QueryClientProvider>
  );
}

export default App;
