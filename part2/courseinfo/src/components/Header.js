const Header = (props)=>{
    console.log(props)
    const {course} = props;
    return(
        <div>
            <h2> {course.name} </h2>
        </div>
    )
}

export default Header;