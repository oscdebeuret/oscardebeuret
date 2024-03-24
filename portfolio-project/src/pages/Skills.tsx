function Skills() {
    return (
        <>
            <div className="article-section mb-20 gradient-purple-tr">
                <h1 className="underline-purple mb-12 mt-24 md:text-[35px] text-[30px] " id="comp">Mes compétences</h1>
                <p className="lexend-giga font-bold text-[20px] tracking-tighter mb-5">
                    Langages
                </p>
                <div className="flex flex-col">
                    <div className="flex flex-wrap  w-full justify-center">
                        <TileSkill text="HTML/CSS" color="4271E9"></TileSkill>
                        <TileSkill text="JavaScript" color="4271E9"></TileSkill>
                        <TileSkill text="TypeScript" color="4271E9"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Java" color="4271E9"></TileSkill>
                        <TileSkill text="Python" color="4271E9"></TileSkill>
                        <TileSkill text="C#" color="4271E9"></TileSkill>
                        <TileSkill text="PHP" color="4271E9"></TileSkill>
                        <TileSkill text="Dart" color="4271E9"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Shell" color="4271E9"></TileSkill>
                        <TileSkill text="SQL" color="4271E9"></TileSkill>
                    </div>
                </div>

                <p className="lexend-giga font-bold text-[20px] tracking-tighter mt-10 mb-5">
                    Bases de données
                </p>
                <div className="flex flex-col">
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="SQL Server" color="F4C009"></TileSkill>
                        <TileSkill text="MongoDB" color="F4C009"></TileSkill>
                        <TileSkill text="Neo4J" color="F4C009"></TileSkill>
                    </div>
                </div>

                <p className="lexend-giga font-bold text-[20px] tracking-tighter mt-10 mb-5">
                    Frameworks
                </p>
                <div className="flex flex-col">
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Symfony" color="EB9BC1"></TileSkill>
                        <TileSkill text="Flutter" color="EB9BC1"></TileSkill>
                        <TileSkill text="Firebase" color="EB9BC1"></TileSkill>
                        <TileSkill text=".NET" color="EB9BC1"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Bootstrap" color="EB9BC1"></TileSkill>
                        <TileSkill text="Tailwind" color="EB9BC1"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Vue.js" color="EB9BC1"></TileSkill>
                        <TileSkill text="React" color="EB9BC1"></TileSkill>
                        <TileSkill text="Vite" color="EB9BC1"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Cypress (E2E tests)" color="EB9BC1"></TileSkill>
                    </div>
                </div>

                <p className="lexend-giga font-bold text-[20px] tracking-tighter mt-10 mb-5">
                    Dev tools
                </p>
                <div className="flex flex-col">
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Git" color="009999"></TileSkill>
                        <TileSkill text="GitLab / GitHub" color="009999"></TileSkill>
                        <TileSkill text="Azure Devops" color="009999"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="VsCode" color="009999"></TileSkill>
                        <TileSkill text="Rider" color="009999"></TileSkill>
                        <TileSkill text="Visual Studio" color="009999"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Docker" color="009999"></TileSkill>
                        <TileSkill text="Podman" color="009999"></TileSkill>
                    </div>
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Octopus Deploy" color="009999"></TileSkill>
                        <TileSkill text="TeamCity" color="009999"></TileSkill>
                    </div>
                </div>

                <p className="lexend-giga font-bold text-[20px] tracking-tighter mt-10 mb-5">
                    Autre
                </p>
                <div className="flex flex-col">
                    <div className="flex flex-wrap w-full justify-center">
                        <TileSkill text="Figma" color="9747FF"></TileSkill>
                        <TileSkill text="Canvas" color="9747FF"></TileSkill>
                        <TileSkill text="Notion" color="9747FF"></TileSkill>
                    </div>
                </div>

            </div>
        </>
    )
}

const TileSkill = (props: { text: string; color: string }) => {
    const tileStyle = {
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
            <div style={tileStyle} className="flex justify-center align-center py-1 px-3 me-1 mb-2 rounded-lg bg-opacity-20">
                <p className="poppins text-[16px] font-semibold">{props.text}</p>
            </div >
        </>
    )
};

export default Skills