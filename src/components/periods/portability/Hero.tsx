import Walkman from "./Walkman";


const Hero = () => {

    return (
        <div className="relative">
            <div className="w-full h-96 flex-col justify-start items-start inline-flex absolute top-0 -z-10">
                <div className="w-full h-20 bg-pink-500" />
                <div className="w-full h-20 bg-fuchsia-700" />
                <div className="w-full h-20 bg-purple-800" />
                <div className="w-full h-20 bg-violet-900" />
                <div className="w-full h-20 bg-violet-950" />
            </div>

            <div className="grid grid-cols-2 max-w-[2000px] mx-auto">
                <div className="px-16 pt-[300px] font-bold">
                    <h1 className="text-6xl ">The Age of</h1>

                    <h1 className="text-[8rem] leading-[140px]">Portability</h1>
                </div>

                <div className="pt-32">
                    <Walkman />
                </div>
            </div>
        </div>
    );
}

export default Hero;