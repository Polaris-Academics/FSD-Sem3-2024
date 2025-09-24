import React from 'react'

const numbers = ['1','2','3','4','5','6','7','8','9','10'];
const Game = () => {
    const [score, setScore] = React.useState(0);
    const [grid, setGrid] = React.useState([]);
    const [flipped, setFlipped] = React.useState([]);
    const [matched, setMatched] = React.useState([]);
    

    const resetGame = () =>{
        const newNumbers = [...numbers,...numbers];
        const shuffledGrid = newNumbers.sort(() =>  Math.random() - 0.5)
        setGrid(shuffledGrid);
        setMatched([]);
        setFlipped([]);
    }

    const toggle = (index) => {
        setFlipped( prev => [...prev,index]);
        if(flipped.length === 2){
            const [i1,i2] = flipped;
            const card1 = grid[i1];
            const card2 = grid[i2];
            if(card1 === card2){
                setScore(prev => prev+4)
                setMatched(prev => [...prev,i1,i2]);
                setFlipped([])
            }
            else{
                setScore(prev => prev-1);
                setFlipped([]);
            }
        }
    }



  return (
    <div>
        <div>Card Game</div>
        <button onClick={resetGame}>Reset</button>
        <div className='grid grid-cols-4 space-x-2 space-y-2'>
            {grid.map((number,i) => {
                let isMatched = matched.includes(i);
                let isFlipped = flipped.includes(i);
                return(
                    <div key={i} onClick={() => toggle(i)} className=' min-w-12 border-2 min-h-30'>
                        { isMatched || isFlipped ? number : "?"}
                    </div>
                )
            })}
        </div>
        <div>Score: {score}</div>
    </div>
  )
}

export default Game