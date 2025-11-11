import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './assets/components/Navbar';

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
        
        <main className='flex-grow'>
          <Navbar></Navbar>
        </main>

        </div>
      </Router>
    </>
  )
}

export default App
