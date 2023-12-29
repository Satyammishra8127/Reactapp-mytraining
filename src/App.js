import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import  store  from './components/redux/store';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Cakecontainer from './components/Cakecontainer';

function App() {
  return (
    <Provider store={store}>
    <div className="app-container">
      <Header />
      <Home />
      <About />
      <Courses />
      <Contact />
      <Cakecontainer/>
    </div>
    </Provider>
  );
}

export default App;
