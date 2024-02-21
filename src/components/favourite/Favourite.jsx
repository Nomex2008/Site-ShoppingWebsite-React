import Card from '../card/Card';
import styles from './favourite.module.css'

import card04Img from './../../img/images/promo-01.jpg'
import card05Img from './../../img/images/promo-02.jpg'

const Favourite = () => {
    return ( 
        <div className={styles.favourite}>
            <div className="container">
                
                <h3 className="title-2 ">
                    <span>Young’s Favourite</span>
                </h3>

                <div className={styles.favourite__content}>
                    <Card  title="Trending on instagram" muted="Explore Now!" carImgName={card04Img}/>
                    <Card  title="All Under $40" muted="Explore Now!" carImgName={card05Img}/>
                </div>

            </div>
        </div>
     );
}
 
export default Favourite;