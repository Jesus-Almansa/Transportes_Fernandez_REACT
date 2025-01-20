import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/layout/Header/Header2';
import Footer from './components/layout/Footer/Footer';
import ScrollButton from './components/features/ScrollButton/ScrollButton';
import ScrollToTop from './components/features/ScrollToTop/ScrollToTop';
import WhatsAppButton from './components/features/WhatsAppButton/WhatsAppButton';
import KonamiCode from './components/features/KonamiCode/KonamiCode';
import TitleWrapper from './components/features/TitleWrapper/TitleWrapper';

// Import Routes
import naviRoutes from './data/navi_routes';
import routes from './data/routes';

// Import CSS
import './App.css';

function App() {
  return (
    <Router>
      <div><ScrollToTop /></div>
      <KonamiCode />
      <div className="App">
        <Header />

        <Routes>
          {naviRoutes.map(({ path, component: Component, title }) => (
            <Route
              key={path}
              path={path}
              element={
                <TitleWrapper title={title}>
                  <Component />
                </TitleWrapper>
              }
            />
          ))}

          {routes.map(({ path, component: Component, title }) => (
            <Route
              key={path}
              path={path}
              element={
                <TitleWrapper title={title}>
                  <Component />
                </TitleWrapper>
              }
            />
          ))}
        </Routes>


        <Footer />
      </div>

      <ScrollButton />
      <WhatsAppButton />

    </Router>
  );
}

export default App;
