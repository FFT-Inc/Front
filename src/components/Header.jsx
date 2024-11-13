import Logo from '../assets/logo.png'

import '../output.css'

export const Header = ({links, activeLink, handleActiveLink}) => {
    return (
        <header className={`w-full h-[100px] p-3 flex justify-around shadow-lg`}>
            <div className={`flex justify-around items-center`}>
                <img className={`mr-7`} src={Logo} alt="Logo FFT" />
                <h2 className={`text-fft-green text-4xl font-semibold`}>Flexy Freelance Team</h2>
            </div>
            
            <ul className={`flex justify-around items-center`}>
                {links.map(([title, link], index) => {
                    return <li className={`m-7 text-lg`}><a className={activeLink === index ? 'font-bold' : 'font-normal'} href={link} onClick={() => handleActiveLink(index)}>{title}</a></li>;
                })}
                <li className={`m-7 text-lg underline`}><a href='login'>Login</a></li>
                <li><a className={`m-7 text-lg text-fft-green border-2 border-solid border-fft-green`} href='signup'>Sign up</a></li>
            </ul>
        </header>
    );
}