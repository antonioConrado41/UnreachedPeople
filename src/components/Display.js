import React, {useState} from 'react'
import './Display.css'

export const Display = ({info}) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    }

  return (
    <section className='peoplegrouplist'>
      <form onSubmit={handleSubmit}>
      <span className='trigger' onClick={()=> setShow(!show)}> {show? "hide search": "show search"} </span>
      <h1>
        Unreached people goups 
      </h1>
      {show && info.map((i) => (
        <div className='card' id={i.PeopleID3ROG3}>
            <p> key={i.PeopleID3ROG3} peopleName={i.PeopNameInCountry} continent={i.Continent} </p>
        </div>
      ))}
      </form>
    </section>
  )
}

