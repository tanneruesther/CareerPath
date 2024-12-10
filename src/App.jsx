import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/RoadMap';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import Header from './components/Header';
import Footer from './components/Footer';
import Roadmaps from './components/RoadMapResources';


const App = () => {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home where domains are selected */}
          <Route path="/roadmaps" element={<Roadmaps />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />  {/* Route for Sign Up */}
          <Route path="/logout" element={<LogOut />} />  {/* Route for Log Out */}
          
          {/* Route for DomainPage - Make sure the correct domainName is passed as param */}
          <Route path="/roadmap/:domain/:opportunityId" element={<Roadmap />} />  {/* RoadmapPage for selected opportunity */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
