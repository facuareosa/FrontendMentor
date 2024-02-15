import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <h1>Home</h1>
        <Link to='/qrComponent'>Qr Component</Link>
        <Link to='/socialLinksProfile'>Social Links Profile</Link>
    </>
  )
}

export default Home