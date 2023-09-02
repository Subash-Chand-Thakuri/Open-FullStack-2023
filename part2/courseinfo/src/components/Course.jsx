import Header from './Header'
import Content from './Content'
 
 const Course =({course}) =>{
    console.log(course)
    return(
            <div>
                <h1> Web development curriculumn  </h1>
                <Header course={course[0]} />    
                <Content parts={course[0].parts} /> 
                <Header course={course[1]} />  
                <Content parts={course[1].parts} /> 
             </div>
    )
}

export default Course;