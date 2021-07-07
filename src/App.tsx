import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ComparePage from './pages/ComparePage';
import ModalOverlay from './components/Modal/ModalOverlay';
import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <ModalOverlay />
      <Navbar />
      <ComparePage />
    </Provider>
  );
}

export default App;
