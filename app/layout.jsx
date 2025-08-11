import React from 'react'
import '@/styles/globals.css'
import Authprovider from '@/components/Session/provider'


export const metadata = {
    metadataBase: new URL(process.env.SITE_URL)
}   
const layout = ({children}) => {
    return (
        <React.Fragment>
            
            <html>
                <body>
                <Authprovider>

                {children}
                </Authprovider>
               
                </body>
            </html> 
        </React.Fragment>
    )
}

export default layout