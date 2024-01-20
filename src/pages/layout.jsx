//import Home from "./home"
import { Outlet } from "react-router"
import Header from "../components/header"
import Footer from "../components/footer"


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