import {useState} from "react"
import Services from '../services/PersonService'

const PersonForm =
({persons,setPersons,setNotificationMessage})=>{
    const [newName, setNewName] = useState('');
    console.log(newName);
    const [newNumber,setNewNumber] = useState('');

    const handleName = (e)=>{
      setNewName(e.target.value);
      console.log(`name changed to ${e.target.value}`);    
    }
    const handleNumber = (e)=>{
      setNewNumber(e.target.value);
      console.log(`name changed to ${e.target.value}`);    
    }

    const addingPersons = (e) =>{
      e.preventDefault();
      const isPresent = persons.some( person => person.name === newName );
      const existingPerson = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );
      const maxId = Math.max(...persons.map((person) => person.id));
      const newObj = {
        name: newName,
        number: newNumber,
        id : maxId+1
      }
  
      if(isPresent ){ 
          if(window.confirm( `${newName} is already added to phonebook,the number has been changed to the current information`)){           
             
            
            const id = existingPerson.id;
  
                const newObj = {
                  name: newName,
                  number: newNumber,
                  id : id
                }
            
                Services
                .update(newObj,id)
                .then(returnedPerson=>{
                  setNotificationMessage({ 
                    type: 'error',
                    content:`Number of  ${returnedPerson.name} has been updated`} ) 
                  setTimeout(()=>{
                    setNotificationMessage(null)
                  },5000);
                  
                })
              }       
      }
      else{

        if(newNumber === "-" ){
          
                  setNotificationMessage({ 
                    type: 'sucess',
                    content:`Information of ${newName} has already been removed`} ) 
                  setTimeout(()=>{
                    setNotificationMessage(null)
                  },5000);
        }
        else{
        Services
        .create(newObj)
      .then(response=>{
        console.log("object is added",response)
        setPersons([...persons, response]);
        setNotificationMessage( {
          type:'success',
          content:`Added ${response.name}`} ) 
        setTimeout(()=>{
          setNotificationMessage(null)
        },5000);
      }).catch(error => {
        console.error("Error:",error);
      });
    }
      }
       setNewName("");
       setNewNumber("");     
      }
         

    return(
        <>
        <form onSubmit={addingPersons} >
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
        </>
    )
}

export default PersonForm;