import PhotoProfil from '../assets/photo.webp';
import Ub from '../assets/ub.webp'
import Daguin from '../assets/daguin.webp'
import Bewease from '../assets/bewease.webp'

function AboutMe() {
    return (
        <>
            <div className="article-section gradient-blue">
                <h1 className="underline-purple mb-10" id="pres">Présentation</h1>
                <div className="flex flex-row w-7/12 justify-between">
                    <div className="flex flex-col w-8/12 border-2 p-5 py-7 rounded-3xl pe-12">
                        <p className="poppins text-xl text-left font-medium mb-5 leading-8">Étudiant en 3ème année à l’IUT Informatique de Bordeaux, actuellement en alternance chez bewease.</p>
                        <p className="poppins text-xl text-left font-medium leading-8">J’aime monter des <span className="underline-violet px-2">projets</span> informatiques innovants et <span className="underline-violet px-2">créatifs</span>. Découvrez mes projets sur ce portfolio.</p>
                    </div>
                    <div className="flex w-4/12 justify-center align-center">
                        <div className="grid content-center">
                            <img src={PhotoProfil} alt="Photo" className="w-64 rounded-full"></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-7/12 justify-between mt-16">
                    <Formation></Formation>
                    <Experience></Experience>
                </div>
            </div>
        </>
    )
}

const Experience = () => {
    return (
        <>
            <div className="flex flex-col w-6/12 text-left">
                <h3 className="lexend-giga text-2xl tracking-[-3px] tracking-tighter mb-10">Experience</h3>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex w-24 h-24 border-2 rounded-[15px] items-center justify-center">
                            <img src={Bewease} alt="" className="w-16 h-16"></img>
                        </div>
                        <div className="block w-12 h-24 border-e-2"></div>
                        <div className="flex w-24 h-24 border-2 rounded-[15px] items-center justify-center">
                            <img src={Bewease} className="w-16 h-16" />
                        </div>
                        <div className="block w-12 h-24 border-e-2"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[24px]">Full Stack Developer Alternance</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">bewease - Pessac (33)</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">juillet 2023 - Aujourd’hui</p>
                        </div>
                        <div className="h-[60px]"></div>
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[24px]">Full Stack Developer Stagiaire</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">bewease - Pessac (33)</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">Avril - juin 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const Formation = () => {
    return (
        <>
            <div className="flex flex-col w-7/12 text-left">
                <h3 className="lexend-giga text-2xl tracking-[-3px] tracking-tighter mb-10">Formation</h3>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex w-24 h-24 border-2 rounded-[15px] items-center justify-center">
                            <img src={Ub} alt="" className="w-20 h-20"></img>
                        </div>
                        <div className="block w-12 h-24 border-e-2"></div>
                        <div className="flex w-24 h-24 border-2 rounded-[15px] items-center justify-center">
                            <img src={Daguin} className="w-16 h-16" />
                        </div>
                        <div className="block w-12 h-24 border-e-2"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[24px]">BUT Informatique</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">Université de Bordeaux (33)</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">2021 - Aujourd'hui</p>
                        </div>
                        <div className="h-[100px]"></div>
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[24px]">Bac Général</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">Lycée Fernand Daguin (33)</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">2018 - 2021</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">NSI - Histoire des Arts - Maths</p>
                            <p className="poppins font-medium text-[20px] text-neutral-400">Section Européenne Anglais</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutMe
