import React from 'react'
import Header from '../Component/Header/Header'
import Banner from '../Component/Banner/Banner'
import Banner2 from '../Component/Banner2/Banner2'
import Post from '../Component/Posts/Post'
import Footer from '../Component/Footer/Footer'
import Offer from '../Component/Offerbar/Offer'
import Post2 from '../Component/Post2/Post2'
import { Button } from 'bootstrap' 





function home() {
    return (
        <div>
            <Header />
            <Banner/>
            <Banner2/>
            <Post/>
            <Footer/>
            <Offer/>
            <Post2/>

        </div>
    )
}

export default home

