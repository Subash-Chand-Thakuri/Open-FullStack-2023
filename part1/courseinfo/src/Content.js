const Part = (props) =>{
    return(
       <div>
       
      <p> { props.p1 } </p> 
      <p> { props.p2 } </p> 

       </div>
    )
}


const Content = (props) => {
    console.log(props)
    
    return(
        <>
           <Part p1={props.p1[0]} p2 ={props.p2[0]} />
           <Part p1={props.p1[1]} p2 ={props.p2[1]} />
           <Part p1={props.p1[2]} p2 ={props.p2[2]} />
                      
        </>
            
    )
}

export default Content;