import React, {useState} from 'react'
import './Display.css'
import {Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MapMain from './pages/MapMain';


export const Display = ({info, peopleGroup, continent}) => {
  const [show, setShow] = useState(false);
  const [peopleID, setPeopleID] = useState('18995');
  const API_KEY = process.env.REACT_APP_API_KEY

  const navigate = useNavigate();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    }

  const handleButtonShow = (show, continent) => {
    if (continent !== 'nonselect') {
      setShow(!show);
    } else (alert("Select one Continent!"));

  }

  // const callMap = (peopleid) => {
  //   setPeopleID(peopleid);
  //   console.log(peopleID);
  //   navigate('/maps');
  // };

  const filteredInfo = info.filter(unique => (unique.PeopNameInCountry.toLowerCase().includes(peopleGroup.toLowerCase())) || unique.Ctry.toLowerCase().includes(peopleGroup.toLowerCase()));

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
  <Card.Subtitle>{each.Ctry}</Card.Subtitle>
  <Card.Subtitle>{each.Latitude}, {each.Longitude}</Card.Subtitle>
  <Card.Text >
   {each.Summary}
  </Card.Text>
  <div class="card-footer">
    <a href={each.PeopleGroupURL} > 
      <Button style={{}} variant="link">
      More Info
      </Button>
    </a>
    <a>
      {/* <button onClick={()=> console.log(each.PeopleID3)}>See on Map</button> */}
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

