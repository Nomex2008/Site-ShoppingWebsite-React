import './promo.css'
import promoIMG from './../../img/images/header-img.jpg'

const Promo = () => {
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    
                    <div className="promo__text">
                        
                        <div className="promo__title">
                            LET’S
                            EXPLORE
                            UNIQUE
                            CLOTHES.
                        </div>

                        <div className="promo__desc">
                            Live for Influential and Innovative fashion!
                        </div>

                        <div className="promo__btn-wrapper">
                            <a className="promo__btn" href="#!">
                                Shop Now
                            </a>
                        </div>

                    </div>

                    <div className="promo__img">
                        <img src={promoIMG} alt="" />
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default Promo;