import styles from './download.module.css';
import downloadImg from "./../../img/images/vouchers-img.png";
import appStore from './../../img/icons/app-store.png';
import googlePlay from './../../img/icons/google-play.png';

const Download = () => {
    return ( 
        <div className={styles.download}>
            <div className={styles.download__container}>
                <div className={styles.download__body}>

                    <div className={styles.download__comtent}>

                        <h3 className={styles.download__title}>
                            DOWNLOAD APP &
                            GET THE VOUCHER!
                        </h3>

                        <div className={styles.download__text}>
                            <p>
                                Get 30% off for first transaction using
                                Rondovision mobile app for now.
                            </p>
                        </div>

                        <div className={styles.download__icon}>
                            <a href="#!" className={styles.download__link}>
                                <img src={appStore} alt="" />
                            </a>
                            <a href="#!" className={styles.download__link}>
                                <img src={googlePlay} alt="" />
                            </a>
                        </div>

                    </div>

                    <div className={styles.download__img}>
                        <img src={downloadImg} alt="" />
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Download;