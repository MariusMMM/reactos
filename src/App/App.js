import React from 'react';
import Button from './components/Button/Button';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      compteur:0,
      uneData:"salut",
    }
  };
  componentDidMount(){
    console.log("composant monté");
  }
  componentDidUpdate(prevProps,prevState){
    console.log(prevProps,this.props);
    console.log("%c%s", "font-size:24px; color:red", '--------------');
    console.log(prevState,this.state);
    //console.log(arguments);
  }
  render(){
    return (
      <div className='App' data-testid='App'>
        <div>Valeur du compteur : {this.state.compteur}</div>
        
        <Button bgColor='skyblue' 
        onButtonClicked={()=>{
          this.setState({compteur:this.state.compteur+1});
          }}
          >
          +1
          </Button>
          {this.state.compteur <= 0 ? null : <Button>-1</Button>}
        
        
      </div>
    );
  }
}

export default App;