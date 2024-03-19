
const CardM = () => {
    return (
        <>
            <div className="block w-4/12 h-[350px] px-2">
                <div className="block w-full h-full border-2 rounded-[25px]">
                </div>
            </div>
        </>
    )
};

function Projects() {
    return (
        <>
            <div className="article-section mt-[100px] mb-20">
                <h1 className="underline-purple mb-10" id="pres">Mes projets</h1>
                <div className="flex flex-row w-7/12 justify-between">
                    <CardM></CardM>
                    <CardM></CardM>
                    <CardM></CardM>
                </div>
            </div>
        </>
    )
}

export default Projects