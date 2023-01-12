import { DataContext } from "../App"
import { useContext } from "react"
import DataQuiz from "../data/DataQuiz"

const Score = () => {
  const {score,setAppState,setScore} = useContext(DataContext)

  const resetTest=()=>{
    setScore(0)
    setAppState('menu')
  }

  return (
    <div className='score'>
      <h1>TOTAL SCORE</h1>
      <h3>{score} / {DataQuiz.length}</h3>
      <button onClick={resetTest} >Test Again</button>
    </div>
  )
}

export default Score