import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import loadable from '@loadable/component'

const Accueil = loadable( () => import('./pages/Accueil'))
const Apropos = loadable( () => import('./pages/Apropos'))
const Contact = loadable( () => import('./pages/Contact'))
const Events = loadable( () => import('./pages/Events'))
const FiveTwo = loadable( () => import('./pages/FiveTwo'))
const Food = loadable( () => import('./pages/Food'))
const HelpCenter = loadable( () => import('./pages/HelpCenter'))
const Home52 = loadable( () => import('./pages/Home52'))
const Drink52 = loadable( () => import('./pages/Drink52'))
const Hotline = loadable( () => import('./pages/Hotline'))
const Jobs = loadable( () => import('./pages/Jobs'))
const Press = loadable( () => import('./pages/Press'))
const Recipes = loadable( () => import('./pages/Recipes'))
const Registry = loadable( () => import('./pages/Registry'))
const Shop = loadable( () => import('./pages/Shop'))
const Team = loadable( () => import('./pages/Team'))
const Travel = loadable( () => import('./pages/Travel'))


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/five-two" element={<FiveTwo/>} />
        <Route path="/food" element={<Food/>} />
        <Route path="/help-center" element={<HelpCenter/>} />
        <Route path="/home52" element={<Home52/>} />
        <Route path="/drink52" element={<Drink52/>} />
        <Route path="/hotline" element={<Hotline/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/press" element={<Press/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/registry" element={<Registry/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/travel" element={<Travel/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
