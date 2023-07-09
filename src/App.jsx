import './App.css';
import {AboutUs, Chef, Findus, Gallery, Header, Intro, Laurels, Menu} from './container/index'
import { Footer, Nav } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
     <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer/> 
    </div>
  );
}

export default App;
