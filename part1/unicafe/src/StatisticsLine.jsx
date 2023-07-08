const StatisticsLine = (props) =>{ 
       return(   <p> {props.text} {props.value} {props.per && "%"}  </p> ) 
   
}

export default StatisticsLine;