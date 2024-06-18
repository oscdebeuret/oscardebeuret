import PhotoProfil from '../assets/icones/photo.png'
import Memoji from '../assets/icones/memoji.png'
import CV from '../assets/CV.pdf'

import { useEffect, useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { HiPhone } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMenu, IoMdSend } from 'react-icons/io';

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
                        <a href="#contact" onClick={onClose} className="montserrat text-white font-semibold bg-black rounded-lg px-5 py-3 w-50">Contactez moi</a>
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
        <nav className="navbar fixed flex flex-wrap w-full px-5 lg:px-24 py-4 text-align-center bg-transparent place-content-between items-center z-40">
            <button id="open-menu" onClick={openModal} className="flex sm:hidden bg-white p-2 rounded-lg text-2xl">
                <IoIosMenu />
            </button>
            <div className="flex sm:grow sm:max-w-48">
                <a href="#">
                    <img src={PhotoProfil} alt="" className="w-12 h-auto rounded-full" />
                </a>
            </div>
            <div className="hidden sm:flex flex-row gap-x-12 place-content-around poppins font-semibold">
                <a href="#pres">Présentation</a>
                <a href="#proj">Projets</a>
                <a href="#comp">Compétences</a>
            </div>
            <div className="hidden sm:flex place-self-right align-items-center h-full">
                <a type="button" href="#contact" className="montserrat text-white font-semibold bg-black rounded-full px-5 py-3 w-50">Contactez moi</a>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
    );
};


const Footer = () => {
    return (
        <footer className="flex flex-row justify-center">
            <div className="container mb-[150px]">
                <h1 className="underline-purple before:z-10 z-20 mb-5 mt-24 md:text-[35px] text-[30px]" id="contact">Contactez moi</h1>
                <img src={Memoji} alt="memoji" className="w-44" />
                <div className="flex flex-col md:flex-row gap-5 items-center bg-white rounded-2xl p-5">
                    <a href="https://www.linkedin.com/in/oscar-debeuret-35113b215/">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <p className="poppins text-gray-400">
                        debeuret.oscar@gmail.com
                    </p>
                    <a href="mailto:debeuret.oscar@gmail.com" className="flex flex-row items-center gap-2 montserrat text-white font-semibold bg-black rounded-xl px-5 py-3">Envoyez moi un mail <IoMdSend />
                    </a>
                </div>
                <div className="flex flex-col md:flex-row mb-36 mt-10 gap-5">
                    <a href={CV} className="flex flex-row montserrat text-white font-semibold bg-black rounded-full px-5 py-3 items-center gap-2">
                        Téléchargez mon CV
                        <MdOutlineFileDownload className="text-xl" />
                    </a>
                    <a href="tel:+33769271582" className="flex flex-row montserrat text-white font-semibold bg-black rounded-full px-5 py-3 items-center gap-2 justify-between">
                        Appelez moi
                        <HiPhone className="text-l" />
                    </a>
                </div>
                <p className="poppins font-medium text-gray-400 text-center">©Copyright 2024 - Oscar Debeuret. Tous droits réservés.</p>
            </div>
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
