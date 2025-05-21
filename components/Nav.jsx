import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    { path: '/', name: 'Página inicial'},
    { path: '/about', name: 'Sobre nós'},
    /*{ path: '/portfolio', name: 'portfolio'},*/
    { path: '/services', name: 'Serviços'},
    { path: '/contact', name: 'Contato'},
]

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
    const path = usePathname();

    const handleLinkClick = () => {
        if (closeSheet) {
            closeSheet();
        }
    };

    return (
        <div className={`${containerStyles}`}>
            {links.map((link, index) => (
                <React.Fragment key={link.path}>
                    <Link
                        href={link.path}
                        className={`capitalize ${linkStyles}`}
                        onClick={handleLinkClick}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: '-100%'}}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                    {index < links.length - 1 && (
                        <span className="inline text-white text-lg select-none -ml-4 -mr-4">●</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Nav;
