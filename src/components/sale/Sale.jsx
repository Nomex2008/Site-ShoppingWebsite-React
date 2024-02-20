import styles from './sale.module.css';
import sale from './../../img/images/promo-img.jpg'

const Sale = () => {
    return ( 
        <div className={styles.sale}>

            <div className={styles.sale__photo}>
                <div className={styles.sale__img}>
                    <img src={sale} alt="" />
                </div>
            </div>

            <div className={styles.sale__content}>

                <h2 className={styles.sale__title}>
                    <span>PAYDAY</span>
                    SALE NOW
                </h2>

                <div className={styles.sale__text}>
                    <p>Spend minimal $100 get 30% off
                    voucher code for your next purchase</p>
                </div>

                <div className={styles.sale__subTitle}>
                    <span>1 June - 10 June 2021</span><br/>
                    <p>*Terms & Conditions apply</p>
                </div>

                <a href='#!' className={styles.sale__btn}>
                    <p>SHOP NOW</p>
                </a>

            </div>

        </div>
     );
}
 
export default Sale;