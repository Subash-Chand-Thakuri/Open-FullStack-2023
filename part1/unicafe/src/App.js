
import Button from './Button';
import StatisticsLine from './StatisticsLine'
import {useState} from 'react'

function App() {
    const  per = true;

    const [good,setGood] = useState(0);
    const [neutral,setNeutral] = useState(0);
    const [bad,setBad] = useState(0);
    const [count,setCount] = useState(0);

    const handleGood = ()=>{
      setGood(good+1)
      setCount(count+1)      
    }
    const handleNeutral = ()=>{
      setNeutral(neutral+1)  
      setCount(count+1)    
    }
    const handleBad = ()=>{
      setBad(bad+1)
      setCount(count+1)      
    }
    
    

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      
      <Button handleClick = {handleGood} text = "Good" />
      <Button handleClick = {handleNeutral} text = "Neutral" />
      <Button handleClick = {handleBad} text = "Bad" />
      <h1>Statistics</h1>

      { count !==0 ? (
        <>
      <StatisticsLine text='Good' value={good}  />
      <StatisticsLine text='Neutral' value={neutral} />
      <StatisticsLine text='Bad' value={bad}  />
      <StatisticsLine text='All' value={good+neutral+bad}  />
      <StatisticsLine text='Average' value={(good-bad)/(good+neutral+bad)}  />
      <StatisticsLine text='Positive' value={(good/(good+neutral+bad)*100)} per = {per}  />
      
      </>
      ):(<p>No feedback given</p>)
      }
      

      
      
      
    </div>
  );
}

export default App;
