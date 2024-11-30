import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import PageTop from "./pagetop"
import Menu from "./menu"
import Sns from "./sns"
import "../styles/all.scss"

const Layout = (props) => {
  
  return (
    <>
      <Menu />
      <Header />
      <main>{props.children}</main>
      <Footer />
      <PageTop showBelow={200} />
      <Sns />
    </>
  )
}

export default Layout