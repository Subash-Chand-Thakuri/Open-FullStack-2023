import Services from '../services/PersonService'

const Persons =({persons,setPersons,setNotificationMessage})=>{
   
    const del = (person) =>{
    
      Services
      .deletePeople(person.id)
      .then(response=>{
        console.log("deleted",response)
        setPersons(persons.filter(p=> p.id !== person.id ))
        setNotificationMessage({ 
          type: 'success',
          content:`Deleted ${response.name}`} ) 
        setTimeout(()=>{
          setNotificationMessage(null)
        },5000);
        setPersons(persons.filter(n=>n.id !== person.id))
      }).catch((err)=>console.error("Error is shown as:",err))
    }

    return(
        <> 
        {persons.map((person,index)=> (
            <div key={index} > {`${person.name} ${person.number}` }  <button onClick={()=> {
                if (window.confirm("Do you really want to delete this person?")) {
                  del(person);
                }
              } } > delete </button>  </div>
             ))}
             </>
    )
}

export default Persons;