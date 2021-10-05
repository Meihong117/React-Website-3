
import './App.scss';
import Topbar from './components/topbar/TopBar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testmonials from './components/testmonials/Testmonials'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className='app'>
      <Topbar />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
