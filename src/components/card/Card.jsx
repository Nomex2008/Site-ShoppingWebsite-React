import styles from './Card.module.css'
import arrowImg from './../../img/icons/arrow.svg'

const Card = (properties) => {
    return ( 
        <div className={styles.card}>
            <a href="#!" className={styles.card__link}>

                <img className={styles.card__img} src={properties.carImgName} alt="" />
                
                <div className={styles.card__body}>

                    <div className={styles.card__text}>

                        <div className={styles.card__title}>
                            {properties.title}
                        </div>

                        <div className={styles.card__muted}>
                            {properties.muted}
                        </div>
                        
                    </div>

                    <div className={styles.card__icon}>
                        <img src={arrowImg} alt="arrowImg" />
                    </div>

                </div>

            </a>
        </div>
     );
}
 
export default Card;