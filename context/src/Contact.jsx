import React from 'react'
import { useContext } from 'react';
import { MyContext } from './NameContext';

const Contact = () => {
    const {stateName,setStateName} = useContext(MyContext);
    return (
      <div>
          <div>{stateName} from Contact</div>
          <button onClick={() => setStateName('Polaris3')}>Change</button>
      </div>
    )
}

export default Contact