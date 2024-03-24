import WavingHandSVG from '../assets/waving-hand.webp';

function Hero() {
    return (
        <>
            <div className="hero-section flex items-center">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-row items-end mb-5">
                        <div className="montserrat text-xl sm:text-3xl font-bold">Bonjour</div>
                        <img src={WavingHandSVG} alt="Waving Hand" className="w-11 sm:w-14 px-2"></img>
                        <div className="montserrat text-xl sm:text-3xl font-bold">, je m'appelle</div>
                    </div>
                    <div className="lexend-giga title leading-none text-5xl sm:text-7xl md:text-8xl tracking-tighter hover:tracking-normal">OSCAR</div>
                    <div className="lexend-giga title leading-none text-5xl sm:text-7xl md:text-8xl tracking-tighter hover:tracking-normal mb-8">DEBEURET</div>
                    <div className="poppins text-xl sm:text-2xl font-semibold mb-2">Développeur <span className="underline-violet px-2">Full stack</span> en alternance,</div>
                    <div className="poppins text-xl sm:text-2xl font-semibold">à l'IUT Informatique de Bordeaux</div>
                </div>
            </div>
        </>
    )
}

export default Hero
