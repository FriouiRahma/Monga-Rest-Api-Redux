import React from 'react';
import './App.css';
import Mangas from './component/mongaslist';
import ModalComp from './component/ModalInput';

function App() {
  return (
    <div className="App">
      <Mangas/>
      <ModalComp  edit={false}  />
      
    </div>
  );
}

export default App;
