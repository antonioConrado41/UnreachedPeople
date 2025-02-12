import React, { useState } from 'react'

export const Search = (url, setUrl, info, setinfo, apiKey) => {  
    const [continent, setContinent] = useState('nonselect');
   
    const handleReset = () => {
        setContinent('nonselect');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setContinent(continent);
        console.log(info);
        console.log('hello world')
    }

  return (
    <section >
    <form onSubmit={handleSubmit}>
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
        <button onClick={()=> setUrl(`https://api.joshuaproject.net/v1/people_groups.json?api_key=${apiKey}&bible_status=0&continents=${continent}&limit=250&page=1`)}> Search! </button>
    </form>
</section>
  )
}


