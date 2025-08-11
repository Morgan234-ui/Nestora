import HeaderRest from '@/components/Layout/HeaderRest'
import Signin from '@/components/Signin/signin'
import React from 'react'

const page = () => {
  return (
        <React.Fragment>
            <HeaderRest />
            <Signin />
        </React.Fragment>
  )
}

export default page