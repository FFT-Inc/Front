import { useState } from 'react';
import {Header} from './components/Header'

const headerLinks = [
    ['Home', '#home'],
    ['Contact', '#contact']
];

export const App = () => {
    const [activeLink, setAcrtiveLink] = useState(null);
    const handleLinkClick = (index) => {
        setAcrtiveLink(index);
    };

    return (
        <>
            <Header links={headerLinks} activeLink={activeLink} handleActiveLink={handleLinkClick}/>
        </>
    );
}
