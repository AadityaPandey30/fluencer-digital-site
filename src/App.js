import './App.css';
import MainContact from './components/MainContact';
import Footer from './components/Footer';
import Home from "./components/Home";
import OurWorks from './components/OurWorks';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import OurServices from './components/OurServices';
import Navbar from './components/Navbar';
import OurServicesPart from './components/OurServicesPart';
import OurServicesThree from './components/OurServicesThree';
import OurServicesFour from './components/OurServicesFour';
import Privacy from './components/Privacy';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainContact" element={<MainContact />} />
          <Route path="/ourWorks" element={<OurWorks />} />
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/Services2" element={<OurServicesPart />} />
          <Route path="/Services3" element={<OurServicesThree />} />
          <Route path="/Services4" element={<OurServicesFour />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
