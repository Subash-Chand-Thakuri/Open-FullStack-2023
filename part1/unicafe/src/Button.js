import './Btn.css'

const Button = (props) =>{
    console.log(props)
    return(
        <> <button className ="btn" onClick={props.handleClick} > {props.text} </button> </>
        
    )
}

export default Button;