import './App.css';
import {HomePage, Navbar, FullProject,  Router, Routes, Route, Footer} from './imports'

function App() {
  return (
   
 < Router >
    <Navbar />
      <Routes>
          <Route path = "/" element= {<HomePage />} />
          <Route path='/project/:projectName' element={<FullProject />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
