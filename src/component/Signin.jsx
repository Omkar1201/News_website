import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const [eye, seteye] = useState(true)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  // console.log(username);
  // console.log(password) ;
  const navigate = useNavigate();
  function handlelogin(event) {
    event.preventDefault();
    toast.success('Login Successful!');
    navigate('/')
  }
  return (
    <div className='flex h-screen items-center justify-center' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515229144611-617d3ce8e108?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=600")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

      <div className='border border-opacity-20 border-white flex flex-col backdrop-blur-lg items-center bg-transparent duration-[0.5s] transition-all shadow-2xl gap-5 py-10 px-5 rounded-lg'>
        <h2 className='text-xl font-bold'>LOGIN</h2>
        <form onSubmit={handlelogin} className=' flex flex-col items-center gap-5 rounded-lg'>

          <div className='border border-opacity-20 border-white flex items-center w-fit px-2 py-1 rounded-2xl '>
            <input type='text' required onChange={(event) => setusername(event.target.value)} placeholder='Username' className='text-white placeholder-white placeholder-opacity-40 bg-transparent outline-none w-[14rem]' />
            <FaUserAlt />
          </div>
          <div className=' border border-opacity-20 border-white flex items-center w-fit  px-2 py-1 rounded-2xl'>
            <input type={`${eye ? 'password' : 'text'}`} required onChange={(event) => setpassword(event.target.value)} placeholder='password' className='text-white placeholder-opacity-40 placeholder-white bg-transparent outline-none w-[14rem]' />
            <div onClick={() => seteye(!eye)} className=' cursor-pointer'>
              {
                eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
              }
            </div>
          </div>
          <div className='text-xs justify-between w-full flex'>
            <div className=''><label className='flex gap-1 appearance-none'><input type='checkbox' className='' />Remember me</label></div>
            <div className='cursor-pointer text-blue-900'>Forgot Password?</div>

          </div>
            <button className=' w-[16rem] font-semibold bg-white bg-opacity-20 hover:bg-opacity-80 transition-all duration-[0.4] rounded-2xl borde px-2 py-1'>
              LogIn
            </button>
        </form>
        <div className='text-sm text-white'>
          Don't have an account? <span className='font-bold cursor-pointer'>Register</span>
        </div>

      </div>
    </div>
  )
}
