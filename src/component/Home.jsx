import React, { useContext, useState } from 'react'
import Card from './Card'
import Top from './Top'
import { AppContext } from '../context/Appcontext'
import Loading from './Loading'

export default function Home() {
  const { data, loading } = useContext(AppContext)
  return (
    <div className='px-2'>
      {

        loading == true ? (<Loading />) : (
          data != undefined ? (

            <div>

              <div>
                <Top />
              </div>

              <div className='mt-6 font-bold font-serif text-2xl'>What's new</div>
              <div className='flex flex-wrap m-auto gap-5 justify-center my-2'>

                {
                  data.slice(4,).map((dta, index) => (
                    <Card single_data={dta} key={index} />
                  ))
                }
              </div>

            </div>
          ) : (<div className=' flex flex-col justify-center h-screen items-center '><img className='w-[30rem]' src='https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg'></img>
            <div className='mb-2 text-3xl font-bold'>SORRY!</div>
            <div className='font-semibold'>YOUR SEARCH NOT FOUND</div>
          </div>)
        )
      }

    </div>
  )
}
