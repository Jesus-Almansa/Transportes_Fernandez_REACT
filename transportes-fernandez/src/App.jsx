import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollButton from './components/layout/ScrollButton/ScrollButton';

// Import Screens (Pages)
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Services from './screens/Services';
import Team from './screens/Team';

// Import Routes
import routes from './data/routes'; // Importa tu archivo de rutas

// Import CSS
import './App.css';

const routeComponents = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  '/services': Services,
  '/team': Team, // Agrega cualquier otra página necesaria
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {Object.entries(routes).map(([label, path]) => {
            const Component = routeComponents[path];
            return <Route key={label} path={path} element={<Component />} />;
          })}
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes> */}


        <ScrollButton />
        
        <Footer />

      </div>

    </Router>
  );
}

export default App;
