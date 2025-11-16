import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Create from './pages/Create';
import About from './pages/About';
import PostPage from './components/PostPage';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
        
        <main className='flex-grow'>
          <Navbar></Navbar>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/create" element={<Create />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/:id" element={<PostPage/>} />
            </Routes>
        </main>

        </div>
      </Router>
    </>
  )
}

export default App
