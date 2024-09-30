import React from 'react'
import Product from './Product'
import BasicExample from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <BasicExample />
            <Outlet/>

        </>
    )
}

export default Layout