import HeaderRest from '@/components/Layout/HeaderRest'
import Signup from '@/components/Pages/Signup/Signupper'
import React from 'react'

const page = () => {
  return (
       <React.Fragment>
        <HeaderRest />
        <main className='signup'>
            <Signup />
        </main>
       </React.Fragment>
  )
}

export default page