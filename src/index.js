import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Subscribe from './Components/Subscribe';
import FindSubscriber from './Components/FindSubscriber';
import Unsubscribe from './Components/Unsubscribe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="findSubscriber" element={<FindSubscriber />} />
        <Route path="unsubscribe" element={<Unsubscribe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
