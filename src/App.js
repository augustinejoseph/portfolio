import './App.css';
import {HomePage, Navbar,  Router, Routes, Route} from './imports'

function App() {
  return (
   
 < Router >
    <Navbar />
      <Routes>
          <Route path = "/" element= {<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
