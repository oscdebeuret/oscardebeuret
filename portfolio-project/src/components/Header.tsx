import './Header.css'
import WavingHandSVG from '../assets/waving-hand.png';

function Header() {
    return (
        <>
            <div className="hero-section flex items-center">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-row items-end mb-5">
                        <div className="montserrat text-3xl font-bold">Bonjour</div>
                        <img src={WavingHandSVG} alt="Waving Hand" className="w-14 px-2"></img>
                        <div className="montserrat text-3xl font-bold">, je m'appelle</div>
                    </div>
                    <div className="lexend-giga leading-none text-8xl">OSCAR</div>
                    <div className="lexend-giga leading-none text-8xl mb-8">DEBEURET</div>
                    <div className="poppins text-2xl mb-2">Développeur <span className="underline-violet px-2">Full stack</span> en alternance,</div>
                    <div className="poppins text-2xl">à l'IUT Informatique de Bordeaux</div>

                </div>
            </div>
        </>
    )
}

export default Header
