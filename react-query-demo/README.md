# React Query Demo - ALX Project

This project demonstrates advanced data handling with React Query, focusing on fetching, caching, and updating data from a public API.

## Project Overview

The application implements a posts viewer that fetches data from JSONPlaceholder API, showcasing React Query's capabilities:
- Efficient data fetching with automatic caching
- Loading and error states management
- Background refetching
- Cache invalidation and updates
- Optimized network requests

## Features

- **Data Fetching**: Uses `useQuery` hook to fetch posts from JSONPlaceholder
- **Caching**: Data is cached and reused across component mounts/unmounts
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Graceful error display with retry functionality
- **Manual Refetch**: Button to trigger data refresh
- **Cache Demo**: Toggle component to see caching in action
- **Post Selection**: Click posts to view details

## Technologies Used

- React 18
- React Query 3.x
- Vite (build tool)
- CSS3 (vanilla CSS)
- JSONPlaceholder API

## React Query Features Demonstrated

### 1. Query Configuration
```javascript
const { data, isLoading, error, refetch } = useQuery('posts', fetchPosts, {
  staleTime: 5 * 60 * 1000,  // Data fresh for 5 minutes
  cacheTime: 10 * 60 * 1000,  // Data cached for 10 minutes
  refetchOnWindowFocus: false,
});
