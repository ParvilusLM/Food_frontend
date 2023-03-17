import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import loadable from '@loadable/component'
import ScrollToTop from './composants/ScrollToTop'
import DetectionChangementPage from './composants/DetectionChangementPage';
import { useState } from 'react';

const ContenuSponsorise = loadable(() => import('./composants/ContenuSponsorise'))
const Header = loadable(() => import('./composants/Header'))
const Footer = loadable(() => import('./composants/Footer'))

const Accueil = loadable(() => import('./pages/Accueil'))
const Apropos = loadable(() => import('./pages/Apropos'))
const Contact = loadable(() => import('./pages/Contact'))
const Events = loadable(() => import('./pages/Events'))
const FiveTwo = loadable(() => import('./pages/FiveTwo'))
const Food = loadable(() => import('./pages/Food'))
const Home52 = loadable(() => import('./pages/Home52'))
const Drink52 = loadable(() => import('./pages/Drink52'))
const Hotline = loadable(() => import('./pages/Hotline'))
const Jobs = loadable(() => import('./pages/Jobs'))
const Press = loadable(() => import('./pages/Press'))
const Recipes = loadable(() => import('./pages/Recipes'))
const RecipesByCategory = loadable(() => import('./pages/RecipesByCategory'))
const RecipeDetails = loadable(() => import('./pages/RecipeDetails'))
const ProductDetails = loadable(() => import('./pages/ProductDetails'))
const Registry = loadable(() => import('./pages/Registry'))
const Shop = loadable(() => import('./pages/Shop'))
const ShopByCategory = loadable(() => import('./pages/ShopByCategory'))
const Checkout = loadable(() => import('./pages/Checkout'))
const Team = loadable(() => import('./pages/Team'))
const Travel = loadable(() => import('./pages/Travel'))


function App(props) {
  const [currentPath, setCurrentPath] = useState('');


  return (
    <Router >
      <DetectionChangementPage setCurrentPath={setCurrentPath} />
      <ScrollToTop />
      {currentPath !== '/checkout' && <ContenuSponsorise />}
      {currentPath !== '/checkout' && <Header />}
      <Routes>
        <Route exact path="/"  element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/five-two" element={<FiveTwo />} />
        <Route path="/food" element={<Food />} />
        <Route path="/home52" element={<Home52 />} />
        <Route path="/drink52" element={<Drink52 />} />
        <Route path="/hotline" element={<Hotline />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/press" element={<Press />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path='/recipes/:categoryId' element={<RecipesByCategory />} />
        <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/shop/:categoryId' element={<ShopByCategory />} />
        <Route path='/shop/product/:produitId' element={ <ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/team" element={<Team />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
      {currentPath !== '/checkout' && <Footer />}
    </Router>
  );
}

export default App;
