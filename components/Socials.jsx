'use client'

import { Fade } from "react-awesome-reveal"

//Icons das redes Sociais

import Link from 'next/link';
import { RiLinkedinFill, RiBook2Fill, RiWhatsappFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri';

const icons = [
    { path: 'https://www.antoniolisboa.site/', name: <RiBook2Fill/> },
    { path: 'https://www.linkedin.com/in/antonio-lisboa-de-carvalho-b5a5a4194/', name: <RiLinkedinFill/> },
    { path: 'https://wa.me/5569992410109', name: <RiWhatsappFill /> },
    { path: 'https://github.com/LisboaAnt', name: <RiGithubFill /> },
    { path: 'https://www.instagram.com/antoniolis_boa/', name: <RiInstagramFill /> }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
    <div className={`${containerStyles}`}>
        <Fade direction="up" delay={0} cascade damping={0.1} triggerOnce={true}>
            {icons.map((icon, index) => (
                <Link href={icon.path} key={index} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <div className={`${iconStyles}`}>
                            {icon.name}
                        </div>
                    </a>
                </Link>
            ))}
        </Fade>
    </div>
    );
};

export default Socials;
