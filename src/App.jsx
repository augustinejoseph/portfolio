import './App.css'
import {HomePage, Navbar,  Router, Routes, Route} from './imports'

function App() {
  

  return (
    < Router >
    <Navbar />
      <Routes>
          <Route path = "/" element= {<HomePage />} />
          <Route path = "/about" element= {<HomePage />} />
          <Route path = "/education" element= {<HomePage />} />
          <Route path = "/projects" element= {<HomePage />} />
          <Route path = "/contact" element= {<HomePage />} />
          <Route path = "/*" element= {<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
