import style from './send.module.css';

const Send = () => {
    return ( 
        <div className={style.send}>
            <div className={style.send__container}>
                
                <h3 className={style.send__title}>
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </h3>

                <div className={style.send__subtitle}>
                    <p>
                        Type your email down below and be young wild generation
                    </p>
                </div>

                <form action="" className={style.send__form}>
                    <input type="email" placeholder='Add your email here' className={style.send__input} />
                    <button className={style.send__btn}>
                        SEND
                    </button>
                </form>

            </div>
        </div>
     );
}
 
export default Send;