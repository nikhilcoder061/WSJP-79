import React from 'react'
import Header from './Header'
import Footer from './Footer'
import UserCard from './UserCard';

export default function Layout() {

    return (
        <div>
            <Header />
            <div className='d-flex gap-2 flex-wrap'>
                <UserCard name="Wscubetech" email="ws@gmail.com" phone={7418596} city="Jaipur" />
                <UserCard name="Ankit" email="ankit@gmail.com" phone={74142646} city="Delhi" />
                <UserCard name="Akash" email="Akash@gmail.com" phone={12345647} city="Kota" />
                <UserCard name="Himanshu" email="Himanshu@gmail.com" phone={981615} city="Shimla" />
                <UserCard name="Vijay" email="Vijay@gmail.com" phone={119656597} city="Jodhpur" />
                <UserCard name="Dharmesh" email="Dharmesh@gmail.com" phone={516849896} city="New delhi" />
            </div>
            <Footer />
        </div>
    )
}
