import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

let reducerFunction = (x,y)=>{
  console.log(y.type);
  //every function return something
  if(y.type === 'INCREMENTBYONE'){
    return x+1;
  }else if(y.type === 'DECRIMENTBYONE'){
    return x-1;
  }else{
    return x;
  }
  //reducer function alway return new state
  
}

function App() {
  //1. States/Hook
  const [x,setX] = useState(100);
  const [ newData, dispatch ] = useReducer(reducerFunction,x);


  //2. Function Defination
  let clickMe = ()=>{  //FatArrow fUNCTION
    //alert('ok');
    dispatch({type:'INCREMENTBYONE'}); // Actual Argument
  }
  //2. Function Defination
  let clickMe2 = ()=>{  //FatArrow fUNCTION
    //alert('ok');
    dispatch({type:'DECRIMENTBYONE'}); // Actual Argument
  }

  //3. Return statemnt JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {x}
        <br />
        {newData}
        <button onClick={ ()=>{ clickMe()  }  }>INCR</button>
        <button onClick={ ()=>{ clickMe2()  }  }>DECR</button>
      </header>
    </div>
  );
}

export default App;
