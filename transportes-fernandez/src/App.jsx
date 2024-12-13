import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollButton from './components/features/ScrollButton/ScrollButton';

// Import Routes
import routes from './data/navi_routes';

// Import CSS
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>

        <ScrollButton />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
