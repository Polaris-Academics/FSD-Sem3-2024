import React from 'react'
import { useContext } from 'react'
import Contact from './Contact';
import { MyContext } from './NameContext';

const About = () => {
    const {stateName,setStateName} = useContext(MyContext);
    return (
      <div>
          <div>{stateName} from About</div>
          <button onClick={() => setStateName('Polaris2')}>Change</button>
          <Contact/>
      </div>
    )
}

export default About