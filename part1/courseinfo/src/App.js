import Header from './Header'
import Content from './Content'
import Total from './Total'


const App = () =>{

  const course = {
    name:'Half Stack application development',
    parts:[
    {
      name:'Fundamentals of React',
      exercise:10
    },
    {
      name : 'Using props to pass data',
      exercise : 7 
    },  
    {
      name : 'State of a component',
      exercise : 14
    }

  ]
}

 const myObj_name = course.parts.map( part => part.name ) ;
 const myObj_exercise = course['parts'].map( part => part.exercise ) ;
  
  return(
    <div>
     <Header heading = {course.name}  />
     <Content p1 = {myObj_name} p2 = {myObj_exercise}   />
     <Total total= {myObj_exercise}  />

      
    </div>
  )
}

export default App