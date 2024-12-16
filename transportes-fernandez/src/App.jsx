import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollButton from './components/features/ScrollButton/ScrollButton';
import ScrollToTop from './components/features/ScrollToTop/ScrollToTop';

// Import Routes
import naviRoutes from './data/navi_routes';
import routes from './data/routes';

// Import CSS
import './App.css';

function App() {
  return (
    <Router>
      <div><ScrollToTop /></div> {/* Scrolls to top on route change */}
      <div className="App">
        <Header />

        <Routes>
          {/* Render navigation routes */}
          {naviRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Render additional routes */}
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>

        <Footer />
      </div>

      <ScrollButton />

    </Router>
  );
}

export default App;
