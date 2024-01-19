//import Home from "./home"
import { Outlet } from "react-router"
import Header from "./header"
import Footer from "./footer"


const Layout = () => {
  return (
      <main className="layout">
          <Header/>
          <Outlet />
          <Footer/>
    </main>
  )
}
export default Layout