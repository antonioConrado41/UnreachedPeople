import React, {useState} from 'react'
import './Display.css'
import {Card, Button} from 'react-bootstrap';

export const Display = ({info}) => {
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    }
  

  return (

    <section className='display'>
    <form onSubmit={handleSubmit}>
      <span className='trigger' onClick={()=> setShow(!show)}> {show? "Hide search": "show search"} </span>
    <section className='cards'>
    {show && info.map((each) => (

<Card key={each.PeopleID3ROG3} style={{ width: '18rem', height: '50rem' }}>
<Card.Img variant="top" src={each.PeopleGroupPhotoURL} />
<Card.Body>
  <Card.Title style={{fontWeight: 'bold'}}>{each.PeopNameInCountry}</Card.Title>
  <Card.Subtitle>{each.RegionName}</Card.Subtitle>
  <Card.Subtitle>Religion: {each.PrimaryReligion}</Card.Subtitle>
  <Card.Text >
   {each.Summary}
  </Card.Text>
  <a href={each.PeopleGroupURL}> <Button variant="link">More Info</Button>
  </a>
</Card.Body>
</Card>
))}
    </section>
    </form>
    </section>

  )
}

