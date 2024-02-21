import styles from './footer.module.css'
//socialsImg
import fb from './../../img/socials/fb.svg'
import In from './../../img/socials/in.svg'
import inst from './../../img/socials/inst.svg'
import tw from './../../img/socials/tw.svg'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__body}>

                    <div className={styles.footer__main}>

                        <h3 className={styles.footer__title}>
                            FASHION
                        </h3>

                        <div className={styles.footer__subtitle}>
                            <p>
                                Complete your style with awesome clothes from us.
                            </p>
                        </div>

                        <div className={styles.footer__icons}>
                            <a href='#!' className={styles.footer__icon}><img src={fb} alt="fb" /></a>
                            <a href='#!' className={styles.footer__icon}><img src={inst} alt="inst" /></a>
                            <a href='#!' className={styles.footer__icon}><img src={tw} alt="tw" /></a>
                            <a href='#!' className={styles.footer__icon}><img src={In} alt="in" /></a>
                        </div>

                    </div>

                    <div className={styles.footer__lists}>

                        <ul className={styles.footer__list}>
                            <h5 className={styles.footer__miniTitle}>
                                Company
                            </h5>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact us</a></li>
                            <li><a href="#!">Support</a></li>
                            <li><a href="#!">Careers</a></li>
                        </ul>

                        <ul className={styles.footer__list}>
                            <h5 className={styles.footer__miniTitle}>
                                Quick Link
                            </h5>
                            <li><a href="#!">Share Location</a></li>
                            <li><a href="#!">Orders Tracking</a></li>
                            <li><a href="#!">Size Guide</a></li>
                            <li><a href="#!">FAQs</a></li>
                        </ul>

                        <ul className={styles.footer__list}>
                            <h5 className={styles.footer__miniTitle}>
                                Legal
                            </h5>
                            <li><a href="#!">Terms & conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                        </ul>

                    </div>

                </div>
            </div>
        </footer>
     );
}
 
export default Footer;