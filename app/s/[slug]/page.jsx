import HeaderRest from '@/components/Layout/HeaderRest'
import Cards from '@/components/Utilities/Cards/Cards'
import BigCarousels from '@/components/Utilities/Carousels/BigCarousel'
import Hquery from '@/components/Utilities/Search/Filter/Hquery'
import HeaderQuery from '@/components/Utilities/Search/HeaderQuery'
import React from 'react'

// protecting the slug page, we create a function
const getUser = async ({slug}) => {
    try {
        const users = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user`, {
            method: "POST",
            body: JSON.stringify(slug)
        })

        return users
    } catch (error) {
        console.log(error)
    }
}



const page = async ({params}) => {
    const paramsData = await params
    console.log(paramsData)
    const slug = paramsData.slug
    const users = await getUser({slug})
    return (
        users.status == 404 ?
        <React.Fragment>
            error 404
        </React.Fragment>:
        <React.Fragment>
            <HeaderRest />
            <main>
                <section className="search-top-section container">
                    <section className="search-header">
                        {/* <h2>Search result for ...</h2> */}
                    </section>
                    <section className="search-card-section">
                        <h3>Trending Properties</h3>
                        <Cards /> 
                    </section>
                    {/* <section className="search-carousel">
                        <BigCarousels />
                    </section> */}
                    {/* <section className="search-filter"></section> */}
                </section>
            </main>
        </React.Fragment>
    )
}

export default page