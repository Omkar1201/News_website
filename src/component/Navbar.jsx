
import { IoNewspaper } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { TbBrandLeetcode } from 'react-icons/tb'
import { FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/Appcontext';
function Navbar() {
  const cur = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const location = useLocation();
  const { search_txt, setsearch_txt, setcategory, handlesubmit } = useContext(AppContext)

  return (

    <div className=' '>
      <div className={`flex ${location.pathname === '/signin' ? 'border' : ''} border-black justify-between items-center`}>
        <div className='social_icons text-xs flex flex-col'>
          <div>{cur}</div>
          <div className='flex items-center gap-1'>
            {/* <FaLocationDot/> */}
            <img className='w-4' alt='' src='data:image/png;base64,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'></img>
            <div>IN</div>
          </div>
        </div>
        <div className=' text-3xl mb-4 flex items-center gap-2'>
          <IoNewspaper /> <span className='font-bold '>Newsi</span>
        </div>
        <div className=' flex'>
          <Link to='signin'>
            <button className='fauser border-r-2 border-black px-5'><FaUser /></button>
          </Link>
          <div className='icons flex flex-wrap text-lg gap-5 px-5'>
            <button><a href='https://www.instagram.com/omkar_salunkhe12/'><AiOutlineInstagram /></a></button>
            <button><AiOutlineLinkedin /></button>
            <button><AiOutlineTwitter /></button>
            <button><a href='https://leetcode.com/omkarsalunkhe3597/'><TbBrandLeetcode /></a></button>
          </div>
        </div>
      </div>
      <div className={`${location.pathname === '/signin' ? 'border-black' : ''}   menus shadow-xl p-3 border-t border-b-2 flex flex-wrap justify-between`}>

        <div className='navbtn_parent flex flex-wrap gap-5 justify-center font-semibold items-center'>
          <div className='navbtn border-r-2 border-black px-5'>
            <Link to='/'>
              <button>
                Home
              </button>
            </Link>
            <div className={`${location.pathname === '/' ? 'border-2' : ''} border-blue-500`}></div>
          </div>
          {/* <div className='navbtn border-r-2 border-black px-5'>
            <button>
              Categories
            </button>
          </div> */}
          <div className='navbtn border-r-2 border-black px-5'>
            <Link to='about'>
              <button>
                About
              </button>
            </Link>
            <div className={`${location.pathname === '/about' ? 'border-2' : ''} border-blue-500`}></div>
          </div>
          <div className='navbtn border-r-2 border-black px-5'>
            <Link to='contact'>
              <button>
                Contact
              </button>
            </Link>
            <div className={`${location.pathname === '/contact' ? 'border-2' : ''} border-blue-500`}></div>
          </div>
          <div className='navbtn border-r-2 border-black px-5'>
            <Link to='liked'>
              <button>
                Liked articles
              </button>
            </Link>
            <div className={`${location.pathname === '/liked' ? 'border-2' : ''} border-blue-500`}></div>
          </div>
          {/* <div className='navbtn border-r-2 border-black px-5'>
            <select className='outline-none'>
              <option value="">Sort</option>
              <option>popular</option>
              <option>latest</option>
              <option>match</option>
            </select>
          </div> */}

        </div>

        <form onSubmit={handlesubmit}>
          <div className='flex border items-center justify-between rounded-lg shadow-md'>
            <input type='text' value={search_txt} onChange={(event) => setsearch_txt(event.target.value)} placeholder='Search...' className=' bg-transparent outline-none px-1' />
              <button className='ml-1 p-2 bg-blue-500 text-white rounded-r-lg  hover:bg-blue-600'>
                <BsSearch />
              </button>           
          </div>
        </form>

      </div>


    </div>
  );
}

export default Navbar;
