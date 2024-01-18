'use client'
import React, { useEffect, useState } from 'react'
import './page.scss'
import Slyder from './components/slyder'
import moment from 'moment'

export default function Home() {
  //hook
  const [defaultData, setDefaultDate] = useState<string>(new Date().toISOString().split('T')[0])
  //default
  const validDay = moment(defaultData,"YYYY-MM-DD",true).isValid()
  const validPeriod = moment(defaultData,"YYYY-MM-DD/YYYY-MM-DD",true).isValid()
  
  
  return (
    <main>
    
      <h1>Astronomy Picture of the Day</h1>
      <h2>Enter the date(format:YYYY-MM-DD) or period <br/>of dates(format: start date/end date) in the panel below. </h2>
      <div className='filter'>
          <input defaultValue={defaultData} onChange={e=>setDefaultDate(e.target.value)}/>
          {validDay || validPeriod?<></>:<h3>wrong format, correct day:YYYY-MM-DD of period:YYYY-MM-DD/YYYY-MM-DD</h3>}
      </div>
      {validDay || validPeriod?
        <Slyder date={defaultData} validDay={validDay} validPeriod={validPeriod}/>
        :
        <></>
      }
      
    </main>
  )
}
