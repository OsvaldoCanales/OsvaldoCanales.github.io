
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Success } from './components/Success';
import { ProjectDetails } from './components/ProjectDetails';
import { Resume } from "./components/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          {/* Main Page */}
          <Route path="/" element={
            <>
              <Banner />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/success" element={<Success />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
