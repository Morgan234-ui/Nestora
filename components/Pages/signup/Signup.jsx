'use client'

import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({
        name: '', username: '', email: '', password: ''
    })

    console.log(user)

    const input = (e, type) => { 
        setUser({...user, [type]: e.target.value})
    }

    const submit = async (e) => {
        e.preventDefault();
        console.log(user)
        const send = await fetch('/api/auth/signup', {
            method: 'POST', 
            body: JSON.stringify(user)
        })
         const res = await send.json()
         alert(res.message)
    }


  return (
       <React.Fragment>
        <form onSubmit={submit} className="signup">
            <input type="text" onChange={e => input(e,'name')} placeholder='enter name' name='name' id='name' />
            <input type="text" onChange={ e => input(e,'username')} placeholder='enter username' name='username' id='username' />
            <input type="email" onChange={e => input(e,'email')} placeholder='enter email' name='email' id='email' />
            <input type="password" onChange={e => input(e,'password')} placeholder='enter password' name='password' id='password' />
            <input type="submit"  value='signup' />
        </form>
       </React.Fragment>
  )
}

export default Signup
































