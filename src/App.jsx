import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import About from './components/landingPage/about/About';
import LandingPage from './components/landingPage/LandingPage';
import Features from './components/landingPage/Features';
import Testimonials from './components/landingPage/Testimonials';

const theme = extendTheme({
  colors: {
    primary: {
      100: "#c5fffa",
      200: "#8bfff5",
      300: "#4afef0",
      500: "#00d0c9",
      600: "#00a8a5",
      700: "#008080",
      800: "#006679",
      900: "#003235"
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;