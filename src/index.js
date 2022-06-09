import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import theme from './theme';
import Subscribe from './Features/Subscribe';
import FindSubscriber from './Features/FindSubscriber';
import Unsubscribe from './Features/Unsubscribe';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Subscribe />} />
          <Route path="findSubscriber" element={<FindSubscriber />} />
          <Route path="unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
