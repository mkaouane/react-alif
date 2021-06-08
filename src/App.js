import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  Home  from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/'/>
        </Switch>
      <Home />
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
