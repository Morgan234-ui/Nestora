import {withAuth} from "next-auth/middleware"
import { NextResponse} from "next/server"   



export default withAuth(
    // `withAuth` augments your `response` with the user's token
    function middleware(req){
        const urlString = req.url 

        if(req.nextauth.token.id === '' ) {
            if (urlString.includes('protected')) {
                return NextResponse.redirect(new URL('/', req.url))
            }
            // to block a user, delete their details from the database and add an if-statement to block the user
        }
    },
    {
        callbacks: {
            authorized: ({token}) => token?.id !== undefined
        },
    }
)

export const config = {matcher: ["/protected/:path*"]}