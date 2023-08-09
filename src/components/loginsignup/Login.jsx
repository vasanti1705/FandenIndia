import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import LoginPage from './LoginPage'
import fan from '../assests/FanDen.jpg';

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [token, settoken] = useState("")

  const bodyParameters = {
    "email": email,
    "password": password
  };


  const handleSubmit = () => {
    // console.log(bodyParameters)

    axios.post('https://fanden-backend-phfp.onrender.com/api/user/login', bodyParameters)
      .then(data => {
        // console.log(data)
        settoken(data.data.accessToken)

      })
      .catch(err => {
        console.log(err)
      })


  }


  return (
    <>
      {token !== '' ?
        < LoginPage token={token} /> :

        <div className='h-[100vh] bg-black'>
          <div className="container mx-auto flex bg-black  items-center  text-green-700 h-[100%]">
            <div className="flex  flex-col sm:flex-row justify-center mx-auto items-center login bg-white md:h-[60vh] min-h-[420px]">
              <div className="img w-full md:w-1/2 h-[50%] sm:h-[100%] ">
                <img src={fan} alt="" className='h-[100%] object-fill w-[35%] mx-auto  sm:my-0 sm:mx-4 md:mx-0 sm:w-[100%]' />
              </div>
              {/* <div className='h-full w-1/2'> */}

              <div className=" flex flex-col bg-white justify-center py-4 md:py-0 px-12 w-full md:w-1/2 text-left">
                  <div className="text-3xl  font-bold">Sign In </div>
                  <div className="font-semibold py-4">Not a member? Start a 14 day free trial</div>

                  <label htmlFor="email" className='font-semibold'>Email</label>
                  <input onChange={(e) => setemail(e.target.value)} type="email" name="" id="email" placeholder='Enter your email' className='border rounded-md py-2 px-2 my-2 border-green-700' />
                  <label htmlFor="password" className='font-semibold'>Password</label>
                  <input onChange={(e) => setpassword(e.target.value)} type="password" name="" id="password" placeholder='Enter your password' className='border rounded-md px-2 py-2 my-2 border-green-700' />

                  <button type='button' onClick={handleSubmit} className='bg-black py-2 my-4 px-2 font-bold text-[#00df9a]'>Login</button>


                </div>
              {/* </div> */}
            </div>


          </div>
        </div >
      }


    </>
  )
}

export default Login