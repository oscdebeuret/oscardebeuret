import PhotoProfil from '../assets/icones/photo.png';
import Ub from '../assets/icones/ub.webp'
import Daguin from '../assets/icones/daguin.webp'
import Bewease from '../assets/icones/bewease.webp'

function AboutMe() {
    return (
        <>
            <div className="article-section gradient-blue-tr">
                <div className="flex flex-col container">
                    <h1 className="underline-purple mb-10" id="pres">Présentation</h1>
                    <div className="flex md:flex-row md:justify-between md:items-start flex-col-reverse align-center justify-center items-center">
                        <div className="flex flex-col w-full md:w-7/12 bg-white p-3 py-5 rounded-xl lg:pe-12 ">
                            <p className="poppins text-xl text-left font-medium mb-5 leading-8">Étudiant en 3ème année à l’IUT Informatique de Bordeaux, actuellement en alternance chez bewease.</p>
                            <p className="poppins text-xl text-left font-medium leading-8">J’aime monter des <span className="underline-violet px-2">projets</span> informatiques innovants et <span className="underline-violet px-2">créatifs</span>. Découvrez mes projets sur ce portfolio.</p>
                        </div>
                        <div className="flex w-4/12 justify-center align-center mb-10">
                            <div className="grid content-center">
                                <img src={PhotoProfil} alt="Photo" className="w-64 rounded-full"></img>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-fulljustify-between mt-16">
                        <Formation></Formation>
                        <Experience></Experience>
                    </div>
                </div>

            </div>
        </>
    )
}

const Experience = () => {
    return (
        <>
            <div className="flex flex-col w-full md:w-6/12 text-left">
                <h3 className="lexend-giga text-2xl tracking-[-3px] tracking-tighter mb-10">Experience</h3>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex w-24 h-24 rounded-[15px] items-center justify-center bg-white">
                            <img src={Bewease} alt="" className="w-16 h-16"></img>
                        </div>
                        <div className="block w-12 h-12 md:h-24 border-e-[5px] border-white"></div>
                        <div className="flex w-24 h-24  bg-white rounded-[15px] items-center justify-center">
                            <img src={Bewease} className="w-16 h-16" />
                        </div>
                        <div className="block w-12 h-12 md:h-24 border-e-[5px] border-white"></div>
                    </div>
                    <div className="flex grow flex-col">
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[18px] md:text-[24px]">Développeur web Full Stack .NET - Alternance</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">bewease - Pessac (33)</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">juillet 2023 - Aujourd’hui</p>
                            {/* <div className="flex mt-2">

                                <a href="" className="flex flex-row montserrat font-semibold bg-transparent border-2 border-black text-black rounded-xl p-2 py-1 items-center gap-2">En savoir plus <IoIosInformationCircle className="text-xl" />
                                </a>
                            </div> */}
                        </div>
                        <div className="h-[50px] md:h-[60px]"></div>
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[18px] md:text-[24px]">Développeur web Full Stack .NET - Stagiaire</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">bewease - Pessac (33)</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">Avril - juin 2023</p>
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
            <div className="flex flex-col w-full md:w-7/12 text-left mb-10 md:mb-0">
                <h3 className="lexend-giga text-2xl tracking-[-3px] tracking-tighter mb-12">Formation</h3>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="flex w-24 h-24 bg-white rounded-[15px] items-center justify-center">
                            <img src={Ub} alt="" className="w-20 h-20"></img>
                        </div>
                        <div className="block w-12 h-12 md:h-24 border-e-[5px] border-white"></div>
                        <div className="flex w-24 h-24 bg-white rounded-[15px] items-center justify-center">
                            <img src={Daguin} className="w-16 h-16" />
                        </div>
                        <div className="block w-12 h-12 md:h-24 border-e-[5px] border-white"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[18px] md:text-[24px]">BUT Informatique</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">Université de Bordeaux (33)</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">2021 - Aujourd'hui</p>
                        </div>
                        <div className="h-[70px] md:h-[100px]"></div>
                        <div className="flex flex-col ms-5">
                            <p className="poppins font-semibold text-[18px] md:text-[24px]">Bac Général</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">Lycée Fernand Daguin (33)</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">2018 - 2021</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">NSI - Histoire des Arts - Maths</p>
                            <p className="poppins font-medium text-[16px] md:text-[20px] text-neutral-400">Section Européenne Anglais</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutMe
