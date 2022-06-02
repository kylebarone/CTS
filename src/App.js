import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
