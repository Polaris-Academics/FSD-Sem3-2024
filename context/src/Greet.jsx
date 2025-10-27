import React from 'react'
import { useContext } from 'react';
import { MyContext } from './NameContext';

const Greet = () => {
  const {stateName,setStateName} = useContext(MyContext);
  return (
    <div>
        <div>{stateName} from Greet</div>
        <button onClick={() => setStateName('Polaris1')}>Change</button>
    </div>
  )
}

export default Greet