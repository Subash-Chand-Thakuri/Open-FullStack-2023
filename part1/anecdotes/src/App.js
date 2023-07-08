import { useState,useEffect } from 'react'
import Button from './Button'

const Heading = ({text}) =>{
return(
  <h1> {text} </h1>
)
};

const Vote = (props)=>{
  return(
    <p>  Has {props.text} votes  </p>
  )
}



const  App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min)+min);
  }

  
  const [selected,setSelected] = useState(null);
  
  //setting up the initial value of the selected
  
  useEffect(()=>{
    const randomIndex = getRandomInt(0,anecdotes.length);
    setSelected(randomIndex);
    // console.log(randomIndex)

  },[])

    const handleClick =()=>{
    const newIndex = getRandomInt(0,anecdotes.length);
    setSelected(newIndex);
    // console.log(newIndex)
  }


  
  //creating the zeros array

  const [items,setItems] = useState( new Array(8).fill(0));
  const [maxIdx,setMaxIndex] = useState(0);
  
  const handleVote =()=>{
    const updatedItems = [...items];
    updatedItems[selected] += 1;
    setItems(updatedItems);

    const maxm = Math.max(...updatedItems);
    const maxIndex = updatedItems.indexOf(maxm);

    setMaxIndex(maxIndex);
    
  }
  console.log(items)
 

  return (
    <div className="App">
      <Heading text = "Anecdote of the day" />
      {selected !== null && <p>{anecdotes[selected]}</p>}
      <Vote text={items[selected]} />
        <br/>
      <Button handleClick={handleVote} value="Vote" />
      <Button handleClick={ handleClick } value = "Next Anecdote" />
      <br/>
      <Heading text = "Anecdote with most votes" />
      <p> {anecdotes[maxIdx]} </p>
        <Vote text ={maxIdx} />
    </div>
  );
}

export default App;
