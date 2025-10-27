import React from 'react'
import List from './List';
import InputBox from './InputBox';

const App = () => {
  const [text,setText] = React.useState('');
  const colors = ["Red","Blue","Green","Yellow"];
  return (
    <div>
      <InputBox text={text} setText={setText}/>
      <List arr={colors} text={text}/>
    </div>
  )
}

export default App