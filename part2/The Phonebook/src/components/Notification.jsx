const Notification = ({message})=>{

    
    if(message === null){
        return null;
    }
    const setColor ={ color:  (message.type === 'success')? 'green' : 'red'};
    return (
        <div className="msgNotification" style ={setColor} >
                {message.content}
        </div>
    )
}
export default Notification;