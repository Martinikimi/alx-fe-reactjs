import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import './App.css';

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  const [showPosts, setShowPosts] = React.useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query Demo</h1>
          <p>Advanced Data Fetching, Caching, and Updates</p>
        </header>

        <div className="demo-controls">
          <button 
            onClick={() => setShowPosts(!showPosts)}
            className="toggle-btn"
          >
            {showPosts ? 'Hide Posts Component' : 'Show Posts Component'}
          </button>
          <p className="demo-hint">
            Toggle the component to see React Query caching in action!
          </p>
        </div>

        {showPosts && <PostsComponent />}

        <footer className="App-footer">
          <p>
            Built with React Query | JSONPlaceholder API | 
            <a href="https://github.com/yourusername/alx-fe-reactjs" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
