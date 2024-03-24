import Punch from "../assets/projets/punch.png";
import Netfloux from "../assets/projets/netfloux.png";
import Portoflio from "../assets/projets/portfolio.png";
import RTSport from "../assets/projets/rtsport.png";
import PongJeu from "../assets/projets/pong-jeu.png";
import Lowatem from "../assets/projets/lowatem.png";
import { useState } from 'react';

const Tile = (props: { text: string; color: string }) => {
    const tileStyle = {
        color: props.color,
        backgroundColor: `rgba(${hexToRgb(props.color)}, 0.2)`
    };

    function hexToRgb(hex: string) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    }

    return (
        <>
            <div style={tileStyle} className="flex justify-center align-center py-1 px-3 me-1 mb-2 rounded-full bg-opacity-20">
                <p className="poppins text-[12px] font-semibold">{props.text}</p>
            </div >
        </>
    )
};

const PlaceholderImage = () => {
    return (
        <div className="flex justify-center items-center rounded-[15px] mb-3 bg-gray-200 text-gray-400 w-full h-[170px]">
        </div>
    );
};

const CardM = (props: { image: string | undefined; title: string; text: string; info?: string; children?: any }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="block w-full md:w-4/12 min-h-[350px] px-2 mb-5 md:mb-0">
            <div className="flex flex-col w-full h-full border-2 rounded-[25px] p-4 text-left">
                {!imageLoaded && <PlaceholderImage />}
                <img
                    src={props.image}
                    alt="image"
                    className={`rounded-[15px] mb-3 ${imageLoaded ? '' : 'hidden'}`}
                    onLoad={handleImageLoad}
                />
                <h2 className="montserrat font-bold text-[20px]">{props.title}</h2>
                <p className="montserrat font-semibold text-[14px] text-neutral-400">{props.text}</p>
                <div className="flex flex-wrap py-2">{props.children}</div>
                <p className="montserrat font-medium italic text-[12px] text-neutral-400">{props.info}</p>
            </div>
        </div>
    );
};


function Projects() {
    return (
        <>
            <div className="article-section mt-[100px] gradient-purple-br">
                <h1 className="underline-purple mb-12" id="proj">Mes projets</h1>
                <div className="flex flex-col md:flex-row w-10/12 md:w-7/12 justify-between mb-5">
                    <CardM image={Punch} title="Punch" text="Application mobile de partage de musique entre amis." info="Projet en cours de développement">
                        <Tile text="Flutter" color="#4271E9"></Tile>
                        <Tile text="Firebase" color="#F4C009"></Tile>
                        <Tile text="Figma" color="#9747FF"></Tile>
                        <Tile text="API Spotify" color="#4CB944"></Tile>
                        <Tile text="UX/UI Design" color="#EB9BC1"></Tile>
                    </CardM>
                    <CardM image={Netfloux} title="Netfloux" text="Applicaton web de geston de séries. Projet d’équipe.">
                        <Tile text="Symfony" color="#4271E9"></Tile>
                        <Tile text="PHP" color="#4271E9"></Tile>
                        <Tile text="Figma" color="#9747FF"></Tile>
                        <Tile text="HTML CSS" color="#4CB944"></Tile>
                        <Tile text="TailwindCSS" color="#4CB944"></Tile>
                        <Tile text="SCRUM" color="#EB9BC1"></Tile>
                    </CardM>
                    <CardM image={Portoflio} title="Portoflio" text="Réalisation de mon site web portfolio.">
                        <Tile text="HTML CSS" color="#4CB944"></Tile>
                        <Tile text="React" color="#4CB944"></Tile>
                        <Tile text="Vite" color="#9747FF"></Tile>
                        <Tile text="TailwindCSS" color="#9747FF"></Tile>
                        <Tile text="Figma" color="#9747FF"></Tile>
                    </CardM>
                </div>
                <div className="flex flex-col md:flex-row w-10/12 md:w-7/12 justify-between">
                    <CardM image={RTSport} title="Site vitrine" text="Réalisation d'un site vitrine d'une entreprise fictive.">
                        <Tile text="HTML CSS" color="#4CB944"></Tile>
                        <Tile text="Bootstrap" color="#4CB944"></Tile>
                        <Tile text="Figma" color="#9747FF"></Tile>
                    </CardM>
                    <CardM image={Lowatem} title="Lowatem" text="Réalisation d'un jeu de plateau avec règles spécifiques et d'une IA.">
                        <Tile text="IA" color="#4271E9"></Tile>
                        <Tile text="Java" color="#4271E9"></Tile>
                        <Tile text="Orienté Objet" color="#9747FF"></Tile>
                        <Tile text="Algorithmie" color="#4CB944"></Tile>
                    </CardM>
                    <CardM image={PongJeu} title="Jeu Pong" text="Réalisation du jeu pong avec processing.">
                        <Tile text="Processing" color="#4271E9"></Tile>
                        <Tile text="Algorithmie" color="#F4C009"></Tile>
                        <Tile text="Orienté Objet" color="#9747FF"></Tile>
                    </CardM>
                </div>
            </div>
        </>
    )
}

export default Projects