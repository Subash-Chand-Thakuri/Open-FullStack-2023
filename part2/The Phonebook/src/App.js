import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Services from './services/PersonService'
import Heading from './components/Heading.jsx'


const App = () => {

  const [persons, setPersons] = useState([]) 

  const [notificationMessage,setNotificationMessage] = useState(null)

  useEffect(()=>{
    Services
    .getAll()
    .then(initialPersons =>{
        console.log('promise fulfilled')
        setPersons(initialPersons);
    }).catch(error => {
      console.error("Error fetching the data",error);
    });
  },[])

  const setPersonList = (PeopleToShow) =>{
    setPersons(PeopleToShow);
  }  

  return (
    <div>
       <Heading text="Phonebook" />
       <Notification message={notificationMessage} />
        <Filter persons={persons} handleFilteredPersons={setPersonList}  />

       

      <Heading text="Add a new" />
      <PersonForm persons={persons} setPersons={setPersonList} setNotificationMessage={setNotificationMessage} />

      <Heading text="Numbers" />
      <Persons persons={persons} setPersons={setPersonList} setNotificationMessage={setNotificationMessage} />
    </div>
  )
  
}
export default App;
