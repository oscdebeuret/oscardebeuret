import PhotoProfil from '../assets/photo.webp'
import MenuBurger from '../assets/menu-burger.png'
import { useEffect, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white p-6 shadow-lg">
        <div className="flex flex-row justify-between items-center mb-10">
            <h2 className="text-xl montserrat font-bold p-0 m-0">Oscar Debeuret</h2>
            <button onClick={onClose} className="flex bg-white border-2 rounded-lg w-8 h-8 justify-center items-center">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
            </button>
        </div>
        <div className="flex flex-col gap-y-5 place-content-around poppins font-medium">
            <a href="#pres" onClick={onClose}>Présentation</a>
            <a href="#proj" onClick={onClose}>Projets</a>
            <a href="#comp" onClick={onClose}>Compétences</a>

            <div className="flex place-self-right align-items-center h-full">
                <button type="button" className="montserrat text-white font-semibold bg-black rounded-lg px-5 py-3 w-50">Contactez moi</button>
            </div>
        </div>
        
      </div>
    </div>
  );
};

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="navbar fixed flex flex-wrap w-full px-5 lg:px-24 py-4 text-align-center bg-transparent place-content-between items-center z-10">
            <button id="open-menu" onClick={openModal} className="flex sm:hidden bg-white p-2 rounded-lg">
                <img src={MenuBurger} alt="" className="w-6"/>
            </button>
            <div className="flex sm:grow sm:max-w-48">
                <a href="#">
                    <img src={PhotoProfil} alt="" className="w-12 h-auto rounded-full" />
                </a>
            </div>
            <div className="hidden sm:flex flex-row gap-x-12 place-content-around poppins font-semibold">
                <a href="#pres">Présentation</a>
                <a href="#">Projets</a>
                <a href="#">Compétences</a>
            </div>
            <div className="hidden sm:flex place-self-right align-items-center h-full">
                <button type="button" className="montserrat text-white font-semibold bg-black rounded-full px-5 py-3 w-50">Contactez moi</button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
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
