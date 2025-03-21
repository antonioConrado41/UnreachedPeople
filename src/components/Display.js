import React, {useState} from 'react'
import './Display.css'
import {Card, Button} from 'react-bootstrap';

export const Display = ({info, peopleGroup, continent}) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    }

  const handleButtonShow = (show, continent) => {
    if (continent !== 'nonselect') {
      setShow(!show);
    } else (alert("Select one Continent!"));

  }

    const filteredInfo = info.filter(unique => (unique.PeopNameInCountry.toLowerCase().includes(peopleGroup.toLowerCase())));

   return (

    <section className='display'>
    <form onSubmit={handleSubmit}>
      <span className='trigger' onClick={()=> handleButtonShow(show, continent)}> {show? "Hide search": "show search"} </span>
      {/* <h1 style={{
          color: show ? "#00FF00" : "#FF0000",
          borderRadius: "5px",
          borderColor: show ? "#00FF00" : "#FF0000",
          // border-radius: // can't use like this, for javascript this is a minus signal, use camelcase instead

              }}> Unreached People Groups </h1> */}
    <section className='cards'>
    {show && continent!== 'nonselect' && filteredInfo.map((each) => (

  <Card key={each.PeopleID3ROG3} style={{ width: '18rem', height: '50rem' }}>
<Card.Img variant="top" src={each.PeopleGroupPhotoURL} />
<Card.Body>
  <Card.Title style={{fontWeight: 'bold'}}>{each.PeopNameInCountry}</Card.Title>
  <Card.Subtitle>{each.RegionName}</Card.Subtitle>
  <Card.Subtitle>Religion: {each.PrimaryReligion}</Card.Subtitle>
  <Card.Text >
   {each.Summary}
  </Card.Text>
  <div class="card-footer">
    <a href={each.PeopleGroupURL} > 
      <Button style={{}} variant="link">
      More Info
      </Button>
    </a>
  </div>
 
</Card.Body>
</Card>

))}
    </section>
    </form>
    </section>

  )
}

