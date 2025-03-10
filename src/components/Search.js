import React, { useState } from 'react'
import './Search.css'

export const Search = ({setUrl ,info, apiKey, url}) => {  

    const [continent, setContinent] = useState('AFR');

    const handleReset = () => {
        setContinent('nonselect');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setContinent(continent);
        console.log('hello world')
    }

    const trySetUrl = (valueContinent) =>{
       
        console.log(continent);
        console.log("nonselect");
        console.log(continent == 'nonselect');
        if (continent != 'nonselect'){  //!= value !== value & type
            console.log('valuecontinent != nonselect')
            setUrl(`https://api.joshuaproject.net/v1/people_groups.json?api_key=${apiKey}&bible_status=0&continents=${continent}&limit=250&page=1`);
        } else if (continent == 'nonselect') {
            alert('select continent!')
        }}

  return (
    <section className='search'>
    <form onSubmit={handleSubmit}>
        <h1> People Group Search </h1>
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
        {/* <button onClick={()=> setUrl(`https://api.joshuaproject.net/v1/people_groups.json?api_key=${apiKey}&bible_status=0&continents=${continent}&limit=250&page=1`)}> Search! </button> */}
    </form>
</section>
  )
}


