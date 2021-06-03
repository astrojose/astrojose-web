import React from "react"
import NavBar from './navbar'
import Footer from './footer'
import Helmet from "react-helmet"
import "./../style.css" 

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
    </Helmet>

    <header className='main-wrapper'><NavBar /> </header>
    <main className="main-wrapper">{children}</main>
    <footer className="main-wrapper">	<Footer /> </footer>

    </>
  )
}

export default Layout
