import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
