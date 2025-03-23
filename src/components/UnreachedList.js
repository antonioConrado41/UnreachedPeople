
import React from 'react'
import './UnreachedList.css'
import { Search } from './Search'
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


      const [infoU, setInfoU] = useState([]);
      const [urlU, setUrlU] = useState(`https://api.joshuaproject.net/v1/totals/CntPeopCtryLR.json?api_key=${ApiKey}`);

    useEffect(() => {
      const fetchNumberUnreached = async () => {
        const res = await fetch(urlU);
        const dat = await res.json();
        setInfoU(dat[0].Value)
      }
      fetchNumberUnreached();
      }, [urlU]);

  return (
    <section>
        <Search  className='unreachedlist' url={url} setUrl={setUrl} info={info} setInfo={setInfo} apiKey={ApiKey} infoU={infoU} />
    </section>
  )
}

