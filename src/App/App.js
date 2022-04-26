import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button text="Mon button" />
      <Button bgColor='teal'>Un bouton</Button>
      <Button color='yellow'><div>ABC</div></Button>
      <Button>
        <img src='http://marius-m.alwaysdata.net/culturemelee/img/facebook.png' alt='img'/>
        <div>Hello</div>
      </Button>
      <Button/>
    </div>
  );
}

export default App;
