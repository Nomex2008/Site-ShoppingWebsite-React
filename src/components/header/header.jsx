import logoimg from './../../img/icons/logo.svg';
import './header.css'

function Header ()  {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">

                    <div className="header__logo">
                        <img src={logoimg} alt="" />
                        <span>Fahion</span>
                    </div>

                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">CATALOGUE</a></li>
                            <li><a href="#!">FASHION</a></li>
                            <li><a href="#!">FAVOURITE</a></li>
                            <li><a href="#!">LIFESTYLE</a></li>
                            <li><a className='header__nav-btn' href="#!">SIGN UP</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    )
};

export default Header;