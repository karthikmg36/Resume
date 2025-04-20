import styles from './NavBar.module.css'
function NavBar({children}) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {children}
      </ul>
    </nav>
  )
};

export default NavBar
