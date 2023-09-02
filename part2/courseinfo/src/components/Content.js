import './Content.css'

const Part = (props) =>{
    const total = props.parts.reduce((s,p)=>{
        s += p.exercises;
       
        return s;
    },0)
    return(
       <div>
       
       {props.parts.map(objs=> <p> {objs.name +" "+ objs.exercises} </p>  )} 

       <span className="bold"> total of  {total}  exercises  </span> 

       </div>
    )
}


const Content = (props) => {
    console.log(props)
    
    return(
        <>
           <Part parts={props.parts} />                      
        </>
            
    )
}

export default Content;