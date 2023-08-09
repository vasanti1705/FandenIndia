import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import LoginPage from './LoginPage'
import fan from '../assests/FanDen.jpg'



const Signup = () => {

    const [email, setemail] = useState("")
    const [name, setname] = useState("")

    const [password, setpassword] = useState("")
    const [token, settoken] = useState("")
    const [validregis, setvalidregis] = useState(false)

    const registerbodyParameters = {

        "password": password,
        "name": name,
        "email": email
    };

    const loginbodyParameters = {
        "email": email,
        "password": password
    }

    useEffect(() => {
        validregis && axios.post('https://fanden-backend-phfp.onrender.com/api/user/login', loginbodyParameters)
            .then(data => {
                settoken(data.data.accessToken)

            })
            .catch(err => {
                // console.log(err)
            })
    }, [validregis])


    const handleClick = (e) => {
        e.preventDefault();
        // console.log(registerbodyParameters)

        axios.post('https://fanden-backend-phfp.onrender.com/api/user/register', registerbodyParameters)
            .then(data => {
                // console.log(data)
                setvalidregis(true)

            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <>
            {token !== "" ? <LoginPage token={token} /> :
                <div className='h-[100vh] bg-black'>
                    <div className="container mx-auto  flex items-center  text-green-700 h-[100%]">
                        <div className="flex justify-center mx-auto items-center login bg-white h-[60vh]">
                            <div className="img w-full md:w-1/2 h-[50%] md:h-[100%]">
                                <img src={fan} alt="" className='h-[100%] object-fill' />
                            </div>
                            <div className=" flex flex-col  justify-center px-12 md:w-1/2 text-left">
                                <div className="text-3xl font-bold my-8">Sign Up </div>
                                
                                <label htmlFor="username" className='font-semibold'>Username</label>
                                <input onChange={(e) => setname(e.target.value)} type="username" name="" id="username" placeholder='Enter your username' className='border rounded-md py-2 px-2 my-2 border-green-700' />
                                <label htmlFor="email" className='font-semibold'>Email</label>
                                <input onChange={(e) => setemail(e.target.value)} type="email" name="" id="email" placeholder='Enter your email' className='border rounded-md py-2 px-2 my-2 border-green-700' />
                                <label htmlFor="password" className='font-semibold'>Password</label>
                                <input onChange={(e) => setpassword(e.target.value)} type="password" name="" id="password" placeholder='Enter your password' className='border rounded-md px-2 py-2 my-2 border-green-700' />

                                <button onClick={handleClick} type='button' className='bg-black py-2 my-4 px-2 font-bold text-[#00df9a]'>Signup</button>
                            </div>
                        </div>


                    </div>
                </div>}


        </>
    )
}

export default Signup