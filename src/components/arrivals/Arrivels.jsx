import Card from '../card/Card';
import './arrivels.css'
//carImg
import car01Img from './../../img/categories/cat-01.jpg'
import car02Img from './../../img/categories/cat-02.jpg'
import car03Img from './../../img/categories/cat-03.jpg'

const Arrivels = () => {
    return ( 
        <section className="arrivels">
            <div className="container">

                <div className="arrivels__header">
                    <h2 className="title-2">
                        <span className='arrivels__title'>NEW ARRIVALS</span>
                    </h2>
                </div>

                <div className="arrivels__cards">
                    <Card title="Hoodies & Sweetshirt" muted="Explore Now!" carImgName={car01Img}/>
                    <Card title="Coats & Parkas" muted="Explore Now!" carImgName={car02Img}/>
                    <Card title="Tees & T-Shirt" muted="Explore Now!" carImgName={car03Img}/>
                </div>

            </div>
        </section>
     );
}
 
export default Arrivels;