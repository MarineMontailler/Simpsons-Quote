import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard 
        quote="I believe the children are the future... Unless we stop them now!"
        character="Homer Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <QuoteCard 
        quote="bla bla bla bla blaaaaaa"
        character="Ralph muntz"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
      />
    </div>
  );
}

export default App;
