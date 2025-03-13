import React from 'react'

export const Filter = ({info, peopleGroup}) => {

  const filteredInfo = info.filter(unique => (unique.PeopNameInCountry.toLowerCase().includes(peopleGroup.toLowerCase())));

  // const sum = filteredInfo.reduce((acumulator, current) => { return acumulator + parseInt(current.Category)} , 0);
  // console.log('info..',{sum})

  return (
    <>
    {/* <h1> Filtered from:  </h1>
    <ul>
      {filteredInfo.map((unique) => (
        <li id={unique.PeopleID3ROG3}> {unique.PeopNameInCountry} </li>
      ))}
    </ul> */}
     

    {/* <h1> Map List AFRICA </h1>
    <ul>
            {info.map((each) => (
                <li id={each.PeopleID3ROG3}> {each.PeopNameInCountry}</li>
            ))}
    </ul> */}
    </>
  
          )}
