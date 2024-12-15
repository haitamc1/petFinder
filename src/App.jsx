'use client'

import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import GetBreeds from './GetBreedList.js';
import Details from './Details.jsx';
import SearchParams from './SearchParams.jsx';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: Infinity,
      cacheTime: Infinity
    },
  },
});


const App = () =>{
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Please, Adopt Me!</ Link>
        </ header>
        <Routes>
          <Route path="/details/:id" element={<Details />}/>
          <Route path="/" element={<SearchParams/>}/>
        </Routes>
      </QueryClientProvider>
    </ BrowserRouter>
  )
}

export default App;