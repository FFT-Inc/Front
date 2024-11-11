import '../style/Header.css'

import Logo from '../assets/logo.png'

function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src={Logo} alt="FFT"/>
                <p>Flexy Freelance Team</p>
            </div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </header>
    );
}

export default Header;