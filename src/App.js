import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OutreachDirectoryPage from './pages/OutreachDirectoryPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BoardMembersPage from './pages/BoardMembersPage';
import PartnershipsPage from './pages/PartnershipsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='/' element={<HomePage />} />
        
        <Route path='directory' element={<OutreachDirectoryPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='board_members' element={<BoardMembersPage />} />
        <Route path='partnerships' element={<PartnershipsPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
