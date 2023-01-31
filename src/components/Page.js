import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../assets/img/logo.png'

const Page = () => {
    const [countryName, setCountryName] = useState("")
    const [flag, setFlag] = useState("")

    useEffect(() => {
        axios.get('https://api.ipregistry.co/119.160.2.153?key=ajbnagofy9kw9pbx').then((response) => {
            setCountryName(response.data.location.country.name);
            setFlag(response.data.location.country.flag.twemoji);

        })
    }, [])

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
            
                <div>
                    <img src={logo} />
                </div>
                <br />
                <div>
                    <p className=' text-xl sm:text-3xl font-bold text-white flex justify-center items-center'>{countryName} <img src={flag} width="50px" style={{ margin: "10px" }} />  Own Crypto <span className='text-orange-400'>Wallet</span></p>
                </div>
                <br />
                <div>
                    <p className='text-2xl sm:text-3xl font-bold text-white'>TheCryptoWallet</p>
                </div>
                <br />
                <div>
                    <p className='text-1xl text-white'>Best Crypto Wallet Coming Soon</p>
                </div>
                <br />
                <div>
                    <button className='bg-orange-400 text-xs p-3 font-bold shadow-md tracking-widest hover:scale-105 transition duration-500'>CONTACT US</button>
                </div>
            </div>
        </>
    )
}

export default Page