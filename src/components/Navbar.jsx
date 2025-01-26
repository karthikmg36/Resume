import styles from '../components/Navbar.module.css'

function Navbar(){
  return (
    <div className={styles.div}>
    <img src={`/images/logo1.jpg`} alt="" className={styles.logo}/>
    <nav className={styles.navBar}>
        <ul>
            <li className={styles.li}><a href="#">Home</a></li>
            <li className={styles.li}><a href="#">Templates</a></li>
            <li className={styles.li}><a href="#">Contact</a></li>
        </ul>
    </nav>
    </div>
  )
};

export default Navbar
