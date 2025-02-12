
import React from 'react'
import './UnreachedList.css'
import { Search } from './Search'
import {Display } from './Display'
import { useEffect, useState } from 'react'

export const UnreachedList = () => {

    const ApiKey = `b41706427183`;
    const [info, setInfo] = useState([]);
    const [url, setUrl] = useState(`https://api.joshuaproject.net/v1/people_groups.json?api_key=${ApiKey}&bible_status=0&continents=EUR&limit=250&page=1`)
  
      useEffect(()=> {
          const fetchInfo = async () => {
              const response = await fetch(url);
              const data = await response.json();
              setInfo(data);
          }
          fetchInfo();
      }, [url]);

  return (
    <section>
        <Search  className='unreachedlist' url={url} info={info} setInfo={setInfo} apikey={ApiKey}/>
        <Display className='unreachedlist' info={info} />
    </section>
  )
}

