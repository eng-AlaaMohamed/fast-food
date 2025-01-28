import { Link } from 'react-router';
import { useRef } from 'react';
import './home.css';

function Header() {

    const menuIcon = useRef();

    // Open Menu
    function openMenu() {
        menuIcon.current.classList.toggle('open');
    }

    return (
        <div className='header'>
            <div className="header-left">
                <Link to="/">Fast Food</Link>
            </div>
            <div ref={menuIcon} className="header-right">
                <ul className="nav-list">
                    <li><Link to={"#"}>HOME</Link></li>
                    <li><Link to={"#"}>MENU</Link></li>
                    <li><Link to={"#"}>ABOUT</Link></li>
                    <li><Link to={"#"}>BOOK TABLE</Link></li>
                </ul>
                <div className="icon-btn">
                    <ul className="nav-icon">
                        <li><Link to={"#"}><i className="bi bi-person-fill"></i></Link></li>
                        <li><Link to={"#"}><i className="bi bi-cart3"></i></Link></li>
                        <li><Link to={"#"}><i className="bi bi-search"></i></Link></li>
                    </ul>
                    <button className='button'>Order Online</button>
                </div>
            </div>
            <div className="menu" onClick={openMenu}><i className="bi bi-list"></i></div>
        </div>
    )
}

export default Header;
