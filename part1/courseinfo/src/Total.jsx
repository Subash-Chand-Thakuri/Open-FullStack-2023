const Total = (props) =>{
    console.log(props)
    return(
            <div>
               <p>
                 Total exercise = {props.total[0]+props.total[1]+props.total[2]}
                </p>
            </div>
    )
}

export default Total;