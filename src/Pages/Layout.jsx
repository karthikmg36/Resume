import { NavLink, Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"
import styles from './Layout.module.css'

function Layout(){
  return (
    <>
    <NavBar>
        <li className={styles.li}><NavLink to={'/'} className={styles.navlink }>Home</NavLink></li>
        <li className={styles.li}><NavLink to={'/about'} className={styles.navlink}>About</NavLink></li>
    </NavBar>
    <Outlet/>
    </>
  )
};

export default Layout
