import styles from './download.module.css';
import downloadImg from "./../../img/images/vouchers-img.png";
import appStore from './../../img/icons/app-store.png';
import googlePlay from './../../img/icons/google-play.png';

const Download = () => {
    return ( 
        <div className={styles.download}>
            <div className={styles.download__container}>
                <div className="download__body">

                    <div className="download__comtent">

                        <h3 className="download__title">
                            DOWNLOAD APP &
                            GET THE VOUCHER!
                        </h3>

                        <div className="download__title">
                            <p>
                                Get 30% off for first transaction using
                                Rondovision mobile app for now.
                            </p>
                        </div>

                        <div className="download__icon">
                            <img src={appStore} alt="" />
                            <img src={googlePlay} alt="" />
                        </div>

                    </div>

                    <div className="download__img">
                        <img src={downloadImg} alt="" />
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Download;