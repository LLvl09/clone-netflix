import React from 'react';
import Row from './components/Row';
import categories from './services/api';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      {categories.map( (category:any) => {
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge}/>;
      })}

      <Footer />   
    </div>
  );
}

export default App;
