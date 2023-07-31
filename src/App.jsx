
import Counter from './Counter';
import { useState } from 'react';
import './App.css'
import ExternalUser from './components/ExternalUser';
import RestCountries from './components/RestCountries';


function App() {


  return (
    <div className='App'>
    <Counter/>
    <Counters/>
    <ExternalUser/>
    <RestCountries/>
   
    </div>
  )
}

function Counters (){
  const [count, setCount] = useState(0);
  const increaseCount = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount =()=>{
    const newCount = count -1;
    setCount(newCount);
  }
  return(
    <div>
        <h1> Count:{count} </h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App
