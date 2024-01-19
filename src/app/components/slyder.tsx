'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    getDataNow
} from './axios'
import {
    slyder
} from './animate'
export default function Slyder({date,validDay,validPeriod}:{date:string, validDay:boolean, validPeriod:boolean}){
    //hook
    const [images, setImages] = useState<Array<string>>([])
    const [error, setError] = useState<boolean>(false)
    //load
    useEffect(()=>{
        if(validDay){
            getDataNow('date='+date)
            .then(res=>{
                let array:any[] = []

                array.push(res.data.url)

                setImages(array)

                slyder()
            })
            .catch(e=>{
                setError(true)
            })
        }
        else if(validPeriod){
            let days:string[] = date.split('/')
            
            getDataNow(`start_date=${days[0]}&end_date=${days[1]}`)
            .then(res=>{
                let array:string[] = []
    
                res.data.forEach((data: any) => {
                    array.push(data.url)
                })
                setImages(array)
            })
            .catch(e=>{
                setError(true)

            })
        }
    },[validPeriod, validDay,date])
    
    
    return(
        <div className="slyder">
            
            
            {error?<h3>Incorrect data:check if the date or range is entered correctly</h3>:<></>}
            {images.map((img,index)=>{
                return <Image src={img} key={index}  alt={``} width={500} height={500}/>
            })}
        </div>
        
    )
}