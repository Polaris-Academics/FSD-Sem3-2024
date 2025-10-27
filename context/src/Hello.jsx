import React from 'react'
import { useContext } from 'react';
import { MyContext } from './NameContext';

const Hello = () => {
    const {stateName,setStateName} = useContext(MyContext);
    return (
      <div>
          <div>{stateName} from Hello</div>
          <button onClick={() => setStateName('Polaris4')}>Change</button>
      </div>
    )
}

export default Hello