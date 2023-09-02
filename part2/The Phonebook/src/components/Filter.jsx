import {useState} from 'react';

const Filter = ({ persons, handleFilteredPersons })=>{
  const [searchTerm,setSearchTerm] = useState('');
    const [filteredPerson,setFilterPerson] = useState(persons);// to use the format of person

  const handleSearch = (e) =>{
    setSearchTerm(e.target.value);
    const PeopleToShow = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  handleFilteredPersons(persons);
  setFilterPerson(PeopleToShow)
      }
    return(
        <div>
          filter shown with:<input value={searchTerm} onChange={handleSearch} />

           <br/>
        {(filteredPerson.length > 0 && searchTerm ) && filteredPerson.map((person, index) => (
  <div key={index}> {`${person.name} ${person.number}`} </div>
 ))}
        
        </div>
    );
}

export default Filter;