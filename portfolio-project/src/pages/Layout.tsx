import './Layout.css'
import PhotoProfil from '../assets/photo.webp'
import { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar?.classList.add('bg-white');
            } if (window.scrollY < 50) {
                navbar?.classList.remove('bg-white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar fixed flex flex-wrap w-full px-5 lg:px-24 py-4 text-align-center bg-transparent place-content-between items-center content-center z-10">
            <div className="flex grow max-w-48">
                <a href="#">
                    <img src={PhotoProfil} alt="" className="w-12 h-auto rounded-full" />
                </a>
            </div>
            <div className="flex flex-row gap-x-12 place-content-around poppins font-semibold">
                <a href="#pres">Présentation</a>
                <a href="#">Projets</a>
                <a href="#">Compétences</a>
            </div>
            <div className="flex place-self-right align-items-center h-full">
                <button type="button" className="montserrat text-white font-semibold bg-black rounded-full px-5 py-3 w-50">Contactez moi</button>
            </div>
        </nav>
    );
};


const Footer = () => {
    return (
        <footer>
        </footer>
    )
}

function Layout({ children }: any) {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout
