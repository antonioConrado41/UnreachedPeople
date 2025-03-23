import React, { useState } from 'react'
import './Search.css'
import {Filter} from './Filter';
import {Display} from './Display';

export const Search = ({setUrl ,info, apiKey, url, infoU}) => {  

    const [continent, setContinent] = useState('AFR');
    const [peopleGroupName, setPeopleGroupName] = useState('Arab');
    
    const handleReset = () => {
        setContinent('nonselect');
    }

    const handleChange = (event) => {
        setPeopleGroupName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setContinent(continent);
    }

    const trySetUrl = (valueContinent) =>{
       
        console.log(continent);
        console.log(continent === 'nonselect');
        if (continent !== 'nonselect'){  //!= value !== value & type
            console.log('valuecontinent != nonselect')
            setUrl(`https://api.joshuaproject.net/v1/people_groups.json?api_key=${apiKey}&bible_status=0&continents=${continent}&limit=250&page=1`);
        } else if (continent === 'nonselect') {
            alert('select continent!')
        }}


  return (
    <section className='search'>
    <form onSubmit={handleSubmit}>
        <h1 className='displayNumber'> {infoU} Unreached People Groups</h1>
        {/* <h1> People Group Search </h1> */}
        <select onChange={(e) => {setContinent(e.target.value)}} value={continent}>
            <option value='nonselect'> select one </option>
            <option value='AFR'> Africa</option>
            <option value='ASI'> Asia </option>
            <option value='AUS'> Australia </option>
            <option value='EUR'> Europa </option>
            <option value='NAR '> North America </option>
            <option value='SOP  '> Oceania </option>
            <option value='LAM  '> South America </option>
        </select>
        <span onClick={handleReset} className='reset'> Reset </span>
        <button onClick={()=> trySetUrl({continent})}> Search Here!</button>
        <input onChange={handleChange} type='text' name='peopleGroupName' id='peopleGroupName' placeholder='Search for an specific people group or country...' autoComplete='off' value={peopleGroupName} />
        {/* <button onClick={()=> setUrl(`https://api.joshuaproject.net/v1/people_groups.json?api_key=${apiKey}&bible_status=0&continents=${continent}&limit=250&page=1`)}> Search! </button> */}
    </form>
    <Filter  className='unreachedlist' url={url} info={info} peopleGroup={peopleGroupName}/>
    <Display className='unreachedlist' info={info} peopleGroup={peopleGroupName} continent={continent} />
</section>
  )
}


