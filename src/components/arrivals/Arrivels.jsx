import Card from '../card/Card';
import './arrivels.css'

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
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>
        </section>
     );
}
 
export default Arrivels;