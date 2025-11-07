import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './assets/components/Home';
import Trending from './assets/components/Trending';
import Create from './assets/components/Create';
import About from './assets/components/About';
import PostPage from './assets/components/PostPage';

function App() {
  return (
    <>
      <Router>
        <nav className='border text-center flex flex-row px-110 py-3 justify-around sticky top-0 bg-transparent backdrop-blur-lg'>
            <Link to="/" className='navbar-buttons text-blue-400'>Home</Link>
            <Link to="/trending" className='navbar-buttons bg-linear-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text'>Trending</Link>
            <Link to="/create" className="navbar-buttons text-blue-400">Create</Link>
            <Link to="/about" className="navbar-buttons text-blue-400">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<PostPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
