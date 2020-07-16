import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <>
            <Menu />
            {props.children}
            <Footer />
        </>
    )
}
