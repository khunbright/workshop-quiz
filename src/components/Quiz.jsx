import DataQuiz from '../data/DataQuiz'
import { useState,useEffect,useContext } from 'react'
import { DataContext } from '../App'

const Quiz = () => {
  const [current,setCurrent] = useState(0)
  const [selectoption, setSelectption] = useState('')

  const {score,setScore,setAppState} = useContext(DataContext)


  useEffect(() => {
    checkAnswer() // eslint-disable-next-line 
  }, [selectoption])
  
  const checkAnswer=()=>{
      if(selectoption!==''){
        if(selectoption === DataQuiz[current].answer){
            setScore(score+1)
            nextQuestion()
      }else{
            nextQuestion()
      }
    }
  }
  const nextQuestion=()=>{
    setSelectption('')
    if(current === DataQuiz.length-1){
      setAppState('score')
    }else{
    setCurrent(current+1)
    }
  }
  return (
    <div className='quiz'>
      <h1>{DataQuiz[current].question}</h1>
      <div className='option'>
        <button onClick={()=>setSelectption('A')}>{DataQuiz[current].A}</button>
        <button onClick={()=>setSelectption('B')}>{DataQuiz[current].B}</button>
        <button onClick={()=>setSelectption('C')}>{DataQuiz[current].C}</button>
        <button onClick={()=>setSelectption('D')}>{DataQuiz[current].D}</button>
      </div>
      <p>{`${current+1} / ${DataQuiz.length}`}</p>
    </div>

  )
}

export default Quiz