'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

const Signin = () => {
  const [userInfo, setUserInfo] = useState({emai: '', password: ''})
  const [loading, setLoading] = useState(false)

  const {data: session } = useState();
  const userrole = session;
  console.log(userrole)

  const logon = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const {email, password} = userInfo

    try {
      const login = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password
      })
      if(login.error === null) {
        alert('login successful')
        Router.push('/v2-permission-required')
      }
      else {
        alert('email or password incorrect')
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
        <React.Fragment>
            <button onClick={() => signIn('google')}>
                sign in with google
                </button>
        </React.Fragment>
  )
}

export default Signin