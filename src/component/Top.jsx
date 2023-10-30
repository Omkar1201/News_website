import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
export default function Top() {
  const { data } = useContext(AppContext)

  return (
    <div className='border-b-2 border-black my-3 py-2'>
      <div className='text-3xl my-1 font-semibold font-serif'>
        Top news
      </div>
      <div className='flex gap-5 flex-wrap'>
        <div className='max-w-[30rem]'>
          {data[0] ?
            (
              <div>
                <img className='' src={data[0].image} />
                <div className='text-2xl font-bold hover:underline'><a href={data[0].source}>{data[0].title}</a></div>
                <div className=' text-xs font-semibold'>by {data[0].author}</div>
              </div>
            )
            :
            <div></div>}
        </div>

        <div className='flex flex-col gap-4'>
          {
            data.slice(1, 4).map((item, index) => (
              <div className='flex flex-wrap gap-2' key={index}>
                <img className='max-w-[15rem]' src={item.image} />
                <div>
                  <div className='  font-bold hover:underline'><a href={item.source}>{item.title}</a></div>
                  <div className=' text-xs font-semibold'>by {item.author}</div>
                </div>
                <div className='w-full'></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
