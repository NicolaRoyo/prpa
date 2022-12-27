import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OutreachDirectoryPage from './pages/OutreachDirectoryPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<OutreachDirectoryPage />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
