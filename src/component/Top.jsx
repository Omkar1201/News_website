import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import './Top.css'
export default function Top() {
  const { data } = useContext(AppContext)

  return (
    <div className='border-b-2 border-black my-3 py-2'>
      <div className='text-3xl my-1 font-semibold font-serif'>
        Top news
      </div>
      <div className='flex gap-4 wrapapply'>
        <div className=' w-[70%] changewidth'>
          {data[0] ?
            (
              <div>
                <img className='max-w-[100%] max-h-[22rem]' src={data[0].Image} alt='img' />
                <div className='text-2xl my-4 font-bold hover:underline'><a href={data[0].Source} target='__blank'>{data[0].Title}</a></div>
                {/* <div className=' text-xs font-semibold'>by {data[0].author}</div> */}
              </div>
            )
            :
            <div></div>}
        </div>

        <div className='flex flex-col gap-7 '>
          {
            data.slice(1, 4).map((item, index) => (
              <div className='flex gap-2' key={index}>
                <img className='max-w-[12rem] changewidth2' src={item.Image} alt='img' />
                <div className=''>
                  <div className=' font-bold hover:underline '><a href={item.Url} target='__blank'>{item.Title}</a></div>
                  {/* <div className=' text-xs font-semibold'>by {item.author}</div> */}
                </div>
                {/* <div className='w-full'></div> */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
