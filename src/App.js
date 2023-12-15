import './App.css';
import { Home } from './HomePage';
import { NavBar } from './NavBar';
import { About } from './about';
import { Footer } from './footer';

function App() {
  return (
    <div >
      <NavBar />
      <Home></Home>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
