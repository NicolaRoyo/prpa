import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OutreachDirectoryPage from './pages/OutreachDirectoryPage';
import BoardMembersPage from './pages/BoardMembersPage';
import PartnershipsPage from './pages/PartnershipsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='directory' element={<OutreachDirectoryPage />} />
        <Route path='board_members' element={<BoardMembersPage />} />
        <Route path='partnerships' element={<PartnershipsPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
