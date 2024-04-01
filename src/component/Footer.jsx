import React from 'react'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { IoCallOutline } from 'react-icons/io5'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbBrandLeetcode } from 'react-icons/tb'
export default function Footer() {
    return (
        <div className='mt-4'>
            <footer className='bg-black px-2 text-white text-opacity-50'>
                <div className=''>
                    <div className='flex items-center'>
                        <span>About us</span>
                    </div>
                    <div>
                        Third-year computer engineering student develops innovative project utilizing API technology to aggregate news articles from diverse sources. Each article is accompanied by a link redirecting users to the respective source, enhancing transparency and credibility. The platform also offers concise summaries, publication dates, author information, and a user-friendly option to 'like' articles of interest. Additionally, users can access a dedicated section to review their liked articles, streamlining their browsing experience.
                    </div>
                </div>
                <div className='border border-white border-opacity-20 w-[95%] m-auto my-[2rem]'></div>
                <div className='flex gap-2 items-center '>
                    <span className='text-sm '>Follow us on: </span>
                    <button><a href='https://leetcode.com/omkarsalunkhe3597/' target='_blank' rel='noreferrer'><TbBrandLeetcode /></a></button>
                    <button><a href='https://www.linkedin.com/in/omkar-salunkhe-28784b214/' target='_blank' rel='noreferrer'><AiOutlineLinkedin /></a></button>
                    <button><a href='https://www.instagram.com/omkar_salunkhe12/' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a></button>
                    <AiOutlineTwitter />

                </div>
                <div className='flex gap-4 items-center '>
                    <IoCallOutline />
                    <span>9975359761</span>
                </div>
                <div className='flex items-center gap-4 text-white text-opacity-50' >
                    <HiOutlineLocationMarker />
                    <div>
                        At post borgaon Dist Satara 415519
                    </div>
                </div>
            </footer>
        </div>
    )
}
