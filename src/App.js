// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/homePage';
import MovieDetailPage from './pages/MovieDetailPage/movieDetailPage';
import SearchPage from './pages/SearchPage/searchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/detail/:id' element={<MovieDetailPage />} />
        <Route path='/search/:query' element={<SearchPage />} />
      </Routes>

    </div>
  );
}

export default App;
