import './promo.css'
import promoIMG from './../../img/images/header-img.jpg'

const Promo = () => {
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    
                    <div className="promo__text">
                        
                        <div className="promo__title">
                            <span className='highlight'>
                                <span className='highlight__span'>LET’S</span>
                            </span>
                            EXPLORE
                            <span className='highlight highlight--yellow'>
                                <span className='highlight__span'>UNIQUE</span>
                            </span>
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